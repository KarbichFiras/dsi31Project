import { TestBed } from '@angular/core/testing';

import { DeleteCategorieService } from './delete-categorie.service';

describe('DeleteCategorieService', () => {
  let service: DeleteCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
