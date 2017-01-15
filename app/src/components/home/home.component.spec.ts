import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { HomeComponent } from './home.component';

describe('a home component', () => {
  let component: HomeComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        HomeComponent
      ]
    });
  });

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
