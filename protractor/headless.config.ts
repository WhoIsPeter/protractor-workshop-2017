import { browser, Config } from "protractor";

import { reporter } from "./helpers/reporter";

export const config: Config = {
    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disabled-gpu', '--window-size=800,600']
        }
    },
    specs: ['../test/Google.spec.js'],
    noGlobals: true,
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        reporter();
    }
}