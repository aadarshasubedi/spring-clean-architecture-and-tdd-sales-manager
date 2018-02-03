import {CloudSalesManagerAppHome} from './app.po';

fdescribe('cloud-sales-manager app', function () {

    let expectedMsg: string = 'This is a cloud based sales management application. ' +
        'To start sale your products in the market register your company.';

    let page: CloudSalesManagerAppHome;

    beforeEach(() => {
        page = new CloudSalesManagerAppHome();
    });

    it('should display: ' + expectedMsg, () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual(expectedMsg);
    });
});
