import { TestBed } from '@angular/core/testing';

import { FilmResolverResolver } from './film-resolver.resolver';

describe('FilmResolverResolver', () => {
  let resolver: FilmResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FilmResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
