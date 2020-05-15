require('../../nightwatch.conf.js');

function getCol(max, min, val) {
  var col = 1;
  if (val === min) {
    col = 1
  } else if (val > min && val < max) {
    col = 2;
  } else {
    col = 3
  }
  return col
}

function getColRow(i) {
  var row = 0;
  var col = 1;
  if (i >= 0 && i <= 2) {
    col = getCol(0, 2, i)
    row = 1
  } else if (i >= 3 && i <= 5) {
    col = getCol(0, 5, i)
    row = 2
  } else if (i >= 6 && i <= 8) {
    col = getCol(0, 8, i)
    row = 3
  } else if (i >= 9 && i <= 12) {
    col = getCol(0, 12, i)
    row = 4
  }
  return {row, col}
}

module.exports = {

  "Validate page login ": function (browser) {

    const loginCommands = browser.page.login();
    loginCommands.navigate()
    //scenario for page countries
      .waitForElementVisible('body', 10000)
      .waitForElementVisible('@dropdownInput', 10000)
      .selectCountry()
      .clickButton()
      //after redirect to homepage click on button login , to access to page login
      .waitForElementVisible('@navbarLoginItem', 10000)
      .click('@navbarLoginItem')
      //access to page login
      .waitForElementVisible('body', 10000)
      //typing inside input username
      .setInputLogin()
      //typing inside input password
      .setInputPassword()
    //click on button '>' on keyboard
    browser.click(`#root > div > div > div.container-content__form > div > div:nth-child(3) > form > div.keyboard__virtual > div > div > div:nth-child(4) > div:nth-child(1)`)
      .pause(1000)
      //start typing for each button
      .elements('css selector', '.simple-keyboard .hg-button span', function (result) {
        for (var i = 0; i < result.value.length; i++) {
          var jsonWebElementId = result.value[i].ELEMENT;
          browser.click(`#root > div > div > div.container-content__form > div > div:nth-child(3) > form > div.keyboard__virtual > div > div > div:nth-child(1) > div:nth-child(2)`)
            .pause(1000)
        }
      })
      //test for button submit login
      .waitForElementVisible('#root > div > div > div.container-content__form > div > div:nth-child(3) > form > div.clearfix.text-right > button', 1000)
      .click('#root > div > div > div.container-content__form > div > div:nth-child(3) > form > div.clearfix.text-right > button')
      //check if error message gonna be displayed in this case
      .waitForElementVisible('#root > div > div > div.container-content__form > div > div.form-error__content', 10000)
  }
};
