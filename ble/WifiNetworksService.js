const bleno = require('bleno');
const util = require('util');

const ReadWifiNetworksCharacteristic = require('./ReadWifiNetworksCharacteristic');

function WifiNetworksService(getNetworks, connectToNetwork) {
  bleno.PrimaryService.call(this, {
      uuid: '3dc07bac-734a-4ea7-8923-d87cbbbcf96b',
      characteristics: [
          new ReadWifiNetworksCharacteristic(getNetworks)
      ]
  });
}

util.inherits(WifiNetworksService, bleno.PrimaryService);

module.exports = WifiNetworksService;