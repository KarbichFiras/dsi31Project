import { TestBed } from '@angular/core/testing';

import { AddFoodsService } from './add-foods.service';

describe('AddFoodsService', () => {
  let service: AddFoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
