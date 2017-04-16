import {Component, View} from "angular2/core";
import {CountryService} from "./country.service";
import {Contact} from "./country";
import {OnInit} from "angular2/core";

@Component({
   selector: "country-list",
   //template: `<div></div>`,
   providers: [CountryService]
})

@View({
  templateUrl: 'app/Listing/jobListing.html' //http://test1.static.infoedge.com/s/4/113/
})

export class MyListComponent implements OnInit {
   public countries : Country[];
   public currentPage : int;
   constructor(private _countryService: CountryService) {
      currentPage: 1;
   }

   getContacts(){
      this._countryService.getContacts().then((countries: Country[]) => this.countries = countries);
   }

   ngOnInit():any{
      this.getContacts();
   }

   clicked(event) {
      console.log(event);
   }

   getNextJobs(page) {
      this.getContacts();
   } 

   showNextJobs(currentPage) {
      this.currentPage = currentPage ? currentPage : 1;
      this.getNextJobs(this.currentPage);
   }

}