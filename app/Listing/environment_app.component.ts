import {Component, View} from "angular2/core";
import {ItemComponent} from './item-list.component';

@Component({
   selector: 'my-app',
   template: `<h2>My First Angular 2 App {{ title }}</h2> <br/><my-list></my-list>`,
   directives: [ItemComponent]
})

/*@View({
  template: '<h2>My First Angular 2 App {{ title }}</h2>'
})*/

export class AppComponent {
	title : 'Senior Software Engineer'
}