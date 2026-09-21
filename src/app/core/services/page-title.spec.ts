import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PageTitle } from './page-title';

describe('PageTitle', () => {
  let service: PageTitle;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });
    service = TestBed.inject(PageTitle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
