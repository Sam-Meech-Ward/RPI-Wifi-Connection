const bleno = require('bleno');
const util = require('util');
const uuids = require('./uuids');
const ReadWifiNetworksCharacteristic = require('./ReadWifiNetworksCharacteristic');
const SetWifiNetworkCharacteristic = require('./SetWifiNetworkCharacteristic');

function WifiNetworksService(getNetworks, connectToNetwork) {
  bleno.PrimaryService.call(this, {
      uuid: uuids.wifiNetworksService,
      characteristics: [
          new ReadWifiNetworksCharacteristic(getNetworks),
          new SetWifiNetworkCharacteristic(connectToNetwork)
      ]
  });
}

util.inherits(WifiNetworksService, bleno.PrimaryService);

module.exports = WifiNetworksService;