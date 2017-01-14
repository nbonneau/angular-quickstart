import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { HomeComponent } from './home.component';
import { HomeService } from './shared/home.service';
import { Home } from './shared/home.model';

describe('a home component', () => {
	let component: HomeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: HomeService, useClass: MockHomeService },
				HomeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HomeComponent], (HomeComponent) => {
		component = HomeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original home service
class MockHomeService extends HomeService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
