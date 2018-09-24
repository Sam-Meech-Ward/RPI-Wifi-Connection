const bleno = require('bleno');
const util = require('util');
const uuids = require('./uuids');

/**
 * 
 * @param {A function that returns a promise that resolves to an array of network objects that look like {bssid, signalLevel, ssid}} networks 
 */
function SetWifiNetworkCharacteristic(setNetwork) {
  bleno.Characteristic.call(this, {
    uuid: uuids.setWifiNetworkCharacteristic,
    properties: ['write'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '66f8de7f-1e66-427f-bf3a-51796a3fda10',
        value: 'Set the current wifi network'
      })
    ]
  });

  this.setNetwork = setNetwork;
}

module.exports = SetWifiNetworkCharacteristic;

util.inherits(SetWifiNetworkCharacteristic, bleno.Characteristic);

SetWifiNetworkCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG);
    return;
  }

  const networkData = JSON.parse(data.toString());
  console.log("Set wifi:", networkData);
  this.setNetwork({networkData});
  callback(this.RESULT_SUCCESS);
};