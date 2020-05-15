var axios = require('axios')
const instance = axios.create({baseURL: 'http://services.sgabs.net'});

module.exports = {
  'navigate to Wallets' : function (browser) {
    browser
      .url('http://localhost:3000/login')
      .waitForElementPresent('body', 10000)
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', "usn001")
      .setValue('input[type=password]', "usn001")
      .click('button[type=submit]')
      .waitForElementPresent('body', 20000)
      .assert.visible('a#clearfix\\ wallets')
      .click('a#clearfix\\ wallets')
      .waitForElementPresent('body', 20000)
      .assert.visible('h4')
      .assert.visible('input:nth-of-type(1)')
      .setValue('input:nth-of-type(1)', "1")
      .assert.visible('input:nth-of-type(3)')
      .setValue('input:nth-of-type(3)', "1")
      .assert.visible('input:nth-of-type(2)')
      .setValue('input:nth-of-type(2)', "1")
      .assert.visible('input:nth-of-type(3)')
      .setValue('input:nth-of-type(3)', "1")
      .assert.visible('input:nth-of-type(2)')
      .setValue('input:nth-of-type(2)', "1")
      .assert.visible('input:nth-of-type(4)')
      .setValue('input:nth-of-type(4)', "1")
      .pause(2000)
      .assert.visible('div.widget-title')
      .elements('css selector', 'div.table-container > div > div > div > table', function(result) {
        this.assert.equal(result.value.length, 7, 'description for row count assert');
      })
    .end();
  },
}
