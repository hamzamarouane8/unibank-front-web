
require('../../nightwatch.conf.js');

module.exports = {

  "Validate page passport-country": function(browser) {
    const countryCommands = browser.page.country();
    countryCommands.navigate()
      .waitForElementVisible('body', 1000)
        //test if logo is visible
      //.waitForElementVisible('@image', 1000)
      //select
      .waitForElementVisible('@dropdown', 1000)
      .selectCountry()
      .clickButton()

  }
};

