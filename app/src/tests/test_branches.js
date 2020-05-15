var axios = require('axios')
const instance = axios.create({baseURL: 'http://services.sgabs.net'});

module.exports = {
  before: function (browser, done) {
    instance.get('bankup-branches/1/branches', {headers: {'X-Tenant-ID': 'SN'}})
      .then(function (response) {
        browser.globals.myVariable = response;
        console.log('api call return branches')

        done();
      })
      .catch(function (error) {
        console.log('api call branches return error')
        done(error);
      });

    instance.get('bankup-branches/1/atms', {headers: {'X-Tenant-ID': 'SN'}})
      .then(function (response) {
        browser.globals.myVariable = response;
        console.log('api call return atms')
        done();
      })
      .catch(function (error) {
        console.log('api call atms return error')
        done(error);
      });
  },
  after: function (browser) {
    browser
      .url('http://localhost:3000/branches')
      .waitForElementPresent('body', 20000)
      .waitForElementPresent('#clearfix\\ sidebar__branches', 5000)   //  200 OK
      //close sidebar
      .waitForElementPresent('#clearfix\\ sidebar__collapse', 5000)   //  200 OK
      .click('#clearfix\\ sidebar__collapse')
      .element('id', '#clearfix\\ sidebar__branches', function (visible) {
        console.log(visible.status !== -1 ? 'the sidebar has gone' : 'the sidebar has not gone')
      })
      //re-open sidebar
      .click('#clearfix\\ sidebar__collapse')
      .element('id', '#clearfix\\ sidebar__branches', function (visible) {
        console.log(visible.status !== -1 ? 'the sidebar has not open' : 'the sidebar has oepn')
      })
      //check input search
      .waitForElementPresent('#clearfix\\ sidebar__branches > div.layout-sidebar-visible.false > div.ui-filtre > div > input[type=text]', 10000)   //  200 OK
      //check buttons of filtre data-test-id
      .waitForElementPresent('#clearfix\\ sidebar__branches > div.layout-sidebar-visible.false > div.ui-filtre > button:nth-child(2)', 4000)   //  200 OK
      .waitForElementPresent('#clearfix\\ sidebar__branches > div.layout-sidebar-visible.false > div.ui-filtre > button:nth-child(3)', 4000)   //  200 OK
      //check childs of list sidebar
      .elements('css selector', '#clearfix\\ sidebar__branches > div.layout-sidebar-visible.false > div.ui.pointing.secondary.vertical.menu > a', function (result) {
        result.value.forEach(function (value) {
          var elementID = value.ELEMENT;
          console.log('Checking Element - ' + elementID);
        });
      })
      // check click on items of list -- this action to open modal
      .waitForElementPresent('#clearfix\\ sidebar__branches > div.layout-sidebar-visible.false > div.ui.pointing.secondary.vertical.menu > a:nth-child(1)', 2000)
      .click('#clearfix\\ sidebar__branches > div.layout-sidebar-visible.false > div.ui.pointing.secondary.vertical.menu > a:nth-child(1)')
      //modal
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1', 2000)
      //section Header and Description
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div.row.ui-header > div > h1', 2000)
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div.row.ui-header > div > p', 2000)
      //section horaire
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div:nth-child(4) > div:nth-child(1) > h2', 2000)
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div:nth-child(4) > div:nth-child(1) > p', 2000)
      //section tel
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div:nth-child(5) > div:nth-child(1) > h2', 2000)
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div:nth-child(5) > div:nth-child(1) > p', 2000)
      //section fax
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div:nth-child(5) > div:nth-child(2) > h2', 2000)
      .waitForElementPresent('body > div.MuiModal-root-2 > div.SimpleModal-paper-1 > div:nth-child(5) > div:nth-child(2) > p', 2000)
      //button itinerary

      .end();
  }
}
