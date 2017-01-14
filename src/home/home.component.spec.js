"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var home_component_1 = require('./home.component');
var home_service_1 = require('./shared/home.service');
describe('a home component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                { provide: home_service_1.HomeService, useClass: MockHomeService },
                home_component_1.HomeComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([home_component_1.HomeComponent], function (HomeComponent) {
        component = HomeComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
// Mock of the original home service
var MockHomeService = (function (_super) {
    __extends(MockHomeService, _super);
    function MockHomeService() {
        _super.apply(this, arguments);
    }
    MockHomeService.prototype.getList = function () {
        return Observable_1.Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
    };
    return MockHomeService;
}(home_service_1.HomeService));
//# sourceMappingURL=home.component.spec.js.map