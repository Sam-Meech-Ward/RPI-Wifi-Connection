const Wifi = require('rpi-wifi-connection');

function scan(name) {
  var wifi = new Wifi({iface: name}); 
  return wifi.scan()
}

exports.scan = scan;

