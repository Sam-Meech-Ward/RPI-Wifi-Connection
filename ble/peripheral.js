function start(getNetworks, connectToNetwork) {

  const bleno = require('bleno');
  const WifiNetworksService = require('./WifiNetworksService');
  const wifiNetworksService = new WifiNetworksService(getNetworks);

  const name = "Sams Wifi";

  bleno.on('stateChange', function(state) {
    if (state === 'poweredOn') {
      //
      // We will also advertise the service ID in the advertising packet,
      // so it's easier to find.
      //
      bleno.startAdvertising(name, [wifiNetworksService.uuid], (err) => {
        if (err) {
          console.log("Error", err);
        }
      });
    }
    else {
      bleno.stopAdvertising();
    }
  });
  
  bleno.on('advertisingStart', function(err) {
    if (!err) {
      console.log('advertising...');
      //
      // Once we are advertising, it's time to set up our services,
      // along with our characteristics.
      //
      bleno.setServices([
        wifiNetworksService
      ]);
    }
  });
}

exports.start = start;