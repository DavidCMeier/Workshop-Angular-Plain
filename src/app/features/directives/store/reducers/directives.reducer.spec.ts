import * as fromActions from '../actions/directives.actions';
import * as fromReducer from './directives.reducer';
import { filmsFixture } from "../../../../shared/fixtures/films.fixture";

describe('The directives reducer', () => {
  describe('with an unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown'
      };

      const state = fromReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

    describe('when load films success action', () => {
      it('should update the films', () => {
        const { initialState } = fromReducer;

        const action = fromActions.loadFilmsSuccess({ films: filmsFixture });
        const state = fromReducer.reducer(initialState, action);

        expect(state.films).toEqual(filmsFixture);
      });
    });

    describe('when load change Season action', () => {
      it('should update the favorite Season', () => {
        const { initialState } = fromReducer;
        const result = 'spring'
        const action = fromActions.loadChangeSeason({ season: result });
        const state = fromReducer.reducer(initialState, action);

        expect(state.favoriteSeason).toEqual(result);
      });
    });
});
