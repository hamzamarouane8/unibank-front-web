var axios = require('axios')
const instance = axios.create({baseURL: 'http://services.sgabs.net'});

module.exports = {
  before: function(browser, done) {
    instance.get('bankup-content/1/faq',{headers: {'X-Tenant-ID': 'SN'}})
      .then(function (response) {
        browser.globals.myVariable = response;
        done();
      })
      .catch(function (error) {
        done(error);
      });
  },
  after: function(browser) {
    browser
      .url('http://localhost:3000/faq')
      .waitForElementPresent('body', 10000)
      .waitForElementPresent('#clearfix\\ item-question\\ 0', 10000)   //  200 OK
      .assert.elementPresent('#clearfix\\ item-question\\ 0')          //  200 OK
      .click('#clearfix\\ item-question\\ 0')
      .waitForElementPresent('#item-question\\ 0\\ descr', 10000)   //  200 OK
      .assert.elementPresent('#item-question\\ 0\\ descr')   // ERROR ?
      .click('#clearfix\\ item-question\\ 1')
      .waitForElementPresent('#item-question\\ 1\\ descr', 10000)   //  200 OK
      .assert.elementPresent('#item-question\\ 1\\ descr')   // ERROR ?
    browser.element('id', '#item-question\\ 0\\ descr', function(visible) {
      if (visible.status !== -1) {
      //TODO SOMETHING IF IT EXISTS
        console.log('the description has gone')
      } else {
        console.log('the description has not gone')
      }
    })
    browser.end();
  },
  beforeEach: function(browser) {

  },
  afterEach: function() {
  },
  'test1': function(browser) {
  },
};
