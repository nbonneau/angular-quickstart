import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Home } from './home.model';

@Injectable()
export class HomeService {

	constructor(private http: Http) { }

	getList(): Observable<Home[]> {
		return this.http.get('/api/list').map(res => res.json() as Home[]);
	}
}