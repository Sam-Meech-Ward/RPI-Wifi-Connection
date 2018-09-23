const ChildProcess  = require('child_process');

let iwName = null;
function getFirstIWName() {
  return new Promise((resolve, reject) => {
    if (iwName) {
      resolve(iwName);
      return;
    }
    ChildProcess.exec(`iw dev | awk '$1=="Interface"{print $2}'`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      iwName = stdout.trim()
      resolve(iwName);
    });
  });
}

exports.getFirstIWName = getFirstIWName;