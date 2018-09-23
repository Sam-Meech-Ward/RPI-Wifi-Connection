const wifiScan = require('./wifiScan');
const iwName = require('./iwName');

function getWifiNetworks() {
    return iwName.getFirstIWName()
    .then(wifiScan.scan);
}

exports.getWifiNetworks = getWifiNetworks;
