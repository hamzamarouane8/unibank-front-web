const loginCommands = {
  setInputLogin: function () {
    this.waitForElementVisible('@usernameInput', 1000)
      .setValue('@usernameInput', 'hmarouane')
      .api.pause(1000)
    return this;

  },
  setInputPassword: function () {
    this.waitForElementVisible('@passwordInput', 1000)
      .setValue('@passwordInput', 'hmarouane')
      .api.pause(1000)
    return this;

  },
  clickButton: function () {
    this.waitForElementVisible('@buttonSubmit', 1000)
      .waitForElementVisible('@buttonSubmit', 1000)
      .click('@buttonSubmit')
      .api.pause(1000)
    return this;
  },
  selectCountry: function () {
    this.waitForElementVisible('@dropdownInput', 1000)
      .click('@dropdownInput')
      .waitForElementVisible('@listCountries', 1000)
      .waitForElementVisible('@listCountriesFirstItem', 1000)
      .click('@listCountriesFirstItem')

      .api.pause(1000)
    return this;
  }
};

module.exports = {
  commands: [loginCommands],
  url: function () {
    return this.api.launchUrl + '/login';
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
    },

    navbarLoginItem: {
      selector: '#root > div > nav > div > ul.nav-link.navbar-secondary.ml-auto.navbar-nav > li:nth-child(2) > a'
    },

    usernameInput: {
      selector: '#root > div > div > div.container-content__form > div > div:nth-child(3) > form > div.row > div:nth-child(1) > div > div.ui.fluid.input > input[type=text]'
    },
    passwordInput: {
      selector: '#root > div > div > div.container-content__form > div > div:nth-child(3) > form > div.row > div:nth-child(2) > div > div.ui.fluid.input > input[type=password]'
    },


  }
};
