
module.exports = {
  'step one: navigate to bankup' : function (browser) {
    browser
      .url('http://localhost:3000/branches')
      .waitForElementPresent('body', 10000)   //  200 OK
      //.click("//*[@id='root']/div/div/container-fluid/div/div/div[2]/button[2]")
      .waitForElementPresent('#root > div > div > container-fluid > div > div > div.ui.map-filtre > button:nth-child(2)', 10000)   //  200 OK
      .assert.elementPresent('#root > div > div > container-fluid > div > div > div.ui.map-filtre > button:nth-child(2)')          //  200 OK
      .click('#root > div > div > container-fluid > div > div > div.ui.map-filtre > button:nth-child(2)')
      .waitForElementPresent('#root > div > div > container-fluid > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(48) > img', 10000)   //  200 OK
      .assert.elementPresent('#root > div > div > container-fluid > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(48) > img')   // ERROR ?
      .end();

  },
}
