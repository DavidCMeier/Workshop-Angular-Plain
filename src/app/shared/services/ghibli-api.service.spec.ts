import { TestBed } from '@angular/core/testing';

import { GhibliApiService } from './ghibli-api.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../../../../../Ibermatica.Formacion.Angular13/src/environments/environment";
import { filmsFixture, filmsResponseFixture } from "../fixtures/films.fixture";

describe('GhibliApiService', () => {
  const baseUrl = environment.apiUrl;
  let service: GhibliApiService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GhibliApiService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of films', (done) =>{
    service.getFilms().subscribe(filmsResponse => {
      expect(filmsResponse).toEqual(filmsFixture);
      done();
    });

    const request = http.expectOne(`${baseUrl}films`);
    request.flush(filmsResponseFixture);
    }
  )

});
