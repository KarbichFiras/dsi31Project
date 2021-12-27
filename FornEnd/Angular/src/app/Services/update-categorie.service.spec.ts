import { TestBed } from '@angular/core/testing';

import { UpdateCategorieService } from './update-categorie.service';

describe('UpdateCategorieService', () => {
  let service: UpdateCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
