const bleno = require('bleno');
const util = require('util');
const uuids = require('./uuids');

/**
 * 
 * @param {A function that returns a promise that resolves to an array of network objects that look like {bssid, signalLevel, ssid}} networks 
 */
function ReadWifiNetworksCharacteristic(getNetworks) {
  bleno.Characteristic.call(this, {
    uuid: uuids.readWifiNetworksCharacteristic,
    properties: ['read'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '5b12f89f-4af6-43a6-b46d-08f7565243dd',
        value: 'Gets All of the wifi networks.'
      })
    ]
  });

  this.getNetworks = getNetworks;
}

module.exports = ReadWifiNetworksCharacteristic;

util.inherits(ReadWifiNetworksCharacteristic, bleno.Characteristic);

ReadWifiNetworksCharacteristic.prototype.onReadRequest = function(offset, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG, null);
    return;
  }

  this.getNetworks()
    .then((networks) => {
      const bufStr = JSON.stringify(networks);
      const data = Buffer.from(bufStr, 'utf8');
      callback(this.RESULT_SUCCESS, data);
      console.log("sent networks");
    })
    .catch((error) => {
      callback(this.RESULT_UNLIKELY_ERROR, Buffer.from("Couldn't get networks", 'utf8'));
      console.log("sent error");
    });
};

module.exports = ReadWifiNetworksCharacteristic;