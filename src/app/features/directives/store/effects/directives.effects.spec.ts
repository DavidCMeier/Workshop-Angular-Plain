import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { MockedObject } from 'ts-jest/dist/utils/testing';
import * as fromEffects from '../index';
import * as fromActions from '../actions';
import * as fromReducer from '../reducers/directives.reducer';
import { GhibliApiService } from "../../../../shared/services/ghibli-api.service";
import { filmsFixture } from "../../../../shared/fixtures/films.fixture";


jest.mock('../../../../shared/services/ghibli-api.service');

describe('The client list effects', () => {
  let actions$ = new Observable<Action>();
  let effects: fromEffects.DirectivesEffects;
  let gilbilApiService: MockedObject<typeof GhibliApiService>;

  beforeEach(() => {
    jest.clearAllMocks();
    const { initialState } = fromReducer;

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        fromEffects.DirectivesEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        GhibliApiService,
      ]
    });

    effects = TestBed.inject(fromEffects.DirectivesEffects);
    gilbilApiService = jest.mocked(GhibliApiService, true);
  });

  describe('when load films', () => {
    it('should call to get all films service', (done) => {
      const mockGetFilms = jest.mocked(gilbilApiService.mock.instances[0].getFilms);
      mockGetFilms.mockReturnValueOnce(of(filmsFixture));

      actions$ = of(fromActions.loadFilms());

      effects.loadFilms$.subscribe((action: any) => {
        expect(action.type).toEqual(fromActions.loadFilmsSuccess.type);
        expect(action.films).toEqual(filmsFixture);
        done();
      });
    });

  });
});
