const wifiScan = require('./wifiScan');
const iwName = require('./iwName');

iwName.getFirstIWName()
.then(wifiScan.scan)
.then((ssids) => {
    console.log(ssids);
})
.catch((error) => {
    console.log("Error", error);
});

