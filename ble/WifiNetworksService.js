const bleno = require('bleno');
const util = require('util');
const uuids = require('./uuids');
const ReadWifiNetworksCharacteristic = require('./ReadWifiNetworksCharacteristic');

function WifiNetworksService(getNetworks, connectToNetwork) {
  bleno.PrimaryService.call(this, {
      uuid: uuids.wifiNetworksService,
      characteristics: [
          new ReadWifiNetworksCharacteristic(getNetworks)
      ]
  });
}

util.inherits(WifiNetworksService, bleno.PrimaryService);

module.exports = WifiNetworksService;