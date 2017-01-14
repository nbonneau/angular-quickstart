import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <home></home>
  `,
})
export class AppComponent  { name = 'Angular'; }
