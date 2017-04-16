System.register(["angular2/core", "./country.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, country_service_1;
    var MyListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            }],
        execute: function() {
            MyListComponent = (function () {
                function MyListComponent(_countryService) {
                    this._countryService = _countryService;
                    currentPage: 1;
                }
                MyListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._countryService.getContacts().then(function (countries) { return _this.countries = countries; });
                };
                MyListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                MyListComponent.prototype.clicked = function (event) {
                    console.log(event);
                };
                MyListComponent.prototype.getNextJobs = function (page) {
                    this.getContacts();
                };
                MyListComponent.prototype.showNextJobs = function (currentPage) {
                    this.currentPage = currentPage ? currentPage : 1;
                    this.getNextJobs(this.currentPage);
                };
                MyListComponent = __decorate([
                    core_1.Component({
                        selector: "country-list",
                        //template: `<div></div>`,
                        providers: [country_service_1.CountryService]
                    }),
                    core_1.View({
                        templateUrl: 'app/Listing/jobListing.html' //http://test1.static.infoedge.com/s/4/113/
                    }), 
                    __metadata('design:paramtypes', [country_service_1.CountryService])
                ], MyListComponent);
                return MyListComponent;
            }());
            exports_1("MyListComponent", MyListComponent);
        }
    }
});
//# sourceMappingURL=service-list.component.js.map