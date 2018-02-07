module.exports = {
  '1# On page load': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.main ')
      .assert.containsText('h1', 'Chega Junto!')
      .assert.elementPresent('#mainbox')
      .assert.elementPresent('.card')
      .assert.elementPresent('.title-card')
      .assert.elementPresent('.info')
  },
  '2# On card click': function (browser) {
    browser
      .click('.card')
      .waitForElementVisible('.event-modal', 1000)
      .assert.elementPresent('.title-text')
      .assert.elementPresent('.list-info')
      .assert.containsText('.main-modal h3', 'Descrição do Evento')
      .assert.elementPresent('.main-modal p')
      .assert.elementPresent('.btn-shadow')
      .assert.containsText('.btn-shadow', 'Quero Participar')
      .click('.btn-shadow')
      .pause(1000)
      .acceptAlert()
  },
  '3# On close modal': function (browser) {
    browser
      .assert.elementPresent('.btn-close')
      .click('.btn-close')
      .pause(1000)
      .assert.elementNotPresent('.event-modal')
      .end();
  }
}
