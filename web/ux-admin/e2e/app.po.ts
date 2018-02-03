import {browser, element, by} from 'protractor';

export class CloudSalesManagerAppHome {

    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('cloud-sales-root p')).getText();
    }
}
