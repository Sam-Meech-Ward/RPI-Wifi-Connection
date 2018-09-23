const wifi = require('./wifi/wifi');
const peripheral = require('./ble/peripheral');

peripheral.start(wifi.getWifiNetworks);