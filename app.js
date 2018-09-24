// const wifi = require('./wifi/wifi');
const peripheral = require('./ble/peripheral');

function network(ssid) {
  return {ssid};
}

function allNetworks() {
  return Promise.resolve([
    network("net1"),
    network("net2"),
    network("net3"),
    network("net4"),
    network("net5"),
    network("🤗"),
  ]);
}

peripheral.start(allNetworks, (ssid, password) => {
  console.log(`ssid ${ssid}, password ${password}`);
});