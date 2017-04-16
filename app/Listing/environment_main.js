System.register(["angular2/platform/browser", "./listing_service.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, listing_service_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (listing_service_component_1_1) {
                listing_service_component_1 = listing_service_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(listing_service_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=environment_main.js.map