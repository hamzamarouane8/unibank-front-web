const countryCommands = {
  clickButton: function(){
     this.waitForElementVisible('@buttonSubmit',1000)
       .waitForElementVisible('@buttonSubmit',1000)
      .click('@buttonSubmit')
      .api.pause(1000)
    return this;
  },
  selectCountry : function() {
    this.waitForElementVisible('@dropdownInput',1000)
      .click('@dropdownInput')
      .waitForElementVisible('@listCountries',1000)
      .waitForElementVisible('@listCountriesFirstItem',1000)
      .click('@listCountriesFirstItem')

      .api.pause(1000)
    return this;
  }
};

module.exports = {
  commands: [countryCommands],
  url: function() {
    return this.api.launchUrl + '/countries';
  },
  elements: {
    buttonSubmit: {
      selector: '#root > div > div > div.section__content > div > div > button'
    },
    image: {
      selector: '#root > div > div.logo'
    },
    dropdownInput: {
      selector: '#root > div > div > div.section__content > div > div > div > div'
    },
    listCountries: {
      selector: '#root > div > div > div.section__content > div > div > div > div > div.visible.menu.transition'
    },
    listCountriesFirstItem: {
      selector: '#root > div > div > div.section__content > div > div > div > div > div.visible.menu.transition > div.selected.item'
    }
  }
};
