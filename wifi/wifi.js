const wifiScan = require('./wifiScan');
const iwName = require('./iwName');
const wifiConnect = require('./wifiConnect');

function getWifiNetworks() {
    return iwName.getFirstIWName()
    .then(wifiScan.scan);
}

exports.getWifiNetworks = getWifiNetworks;

function setWifiNetwork(ssid, password) {
    return iwName.getFirstIWName()
    .then((name) => {
        return wifiConnect.connect(name, ssid, password);
    });
}
exports.setWifiNetwork = setWifiNetwork;