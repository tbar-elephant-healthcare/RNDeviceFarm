/**
 * WebDriver Configuration for Local Testing (Android Emulator)
 */
const path = require('path');
const { config } = require('./wdio.shared.conf');

config.capabilities = [{
  maxInstances: 1,
  platformName: 'Android',
  deviceName: 'emulator-5554',
  app: path.resolve(__dirname, '../android/app/build/outputs/apk/release/app-release-unsigned.apk'),
  automationName: 'UiAutomator2',
}];

exports.config = config;
