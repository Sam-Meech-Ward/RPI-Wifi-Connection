var Wifi = require('rpi-wifi-connection');
 
function connect(iwName, ssid, psk) {
  var wifi = new Wifi({iface: iwName}); 
  return wifi.connect({ssid, psk});
}

exports.connect = connect;

