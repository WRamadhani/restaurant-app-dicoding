const assert = require('assert');

Feature('Unliking a Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking a liked restaurant', async ({ I }) => {
  I.seeElement('#mainContent');
  I.see('We can\'t find a restaurant', '.not__found');

  I.amOnPage('/');
  I.seeElement('.resto__link');
  const firstRestaurant = locate('.resto__link').first();
  const firstRestoTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('.resto--fav-button', 10);
  I.seeElement('.resto--fav-button');
  I.click('.resto--fav-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto__item');
  const likedRestoTitle = await I.grabTextFrom('.resto__link');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.seeElement('.resto__link');
  I.click(locate('.resto__link').first());
  I.waitForElement('.resto--fav-button', 10);
  I.seeElement('.resto--fav-button');
  I.click('.resto--fav-button');

  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.see('We can\'t find a restaurant', '.not__found');

});