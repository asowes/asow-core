const packageInfo = require("@asow/core/package.json");
const { name, version } = packageInfo;
const { execSync } = require("child_process");

const runCommand = (command) => {
  let options = { stdio: "pipe" };
  return execSync(command, options).toString();
};

class AsowPackage {
  constructor(option) {
    const defaultObj = {
      current: true,
      all: false,
      newest: false,
    };

    const combineObj = Object.assign(defaultObj, option);
    const { current, all, newest } = combineObj;

    this.current = current;
    this.all = all;
    this.newest = newest;
  }

  checkVersion() {
    console.log(version);
    if (this.newest) {
      const versions = runCommand(`npm view ${name} versions --json`);
      const versionsObj = JSON.parse(String(versions)) || [];
      console.log("最新的版本为：", versionsObj[versionsObj.length - 1]);
    }
  }

  updateVersion() {
    if (this.current) {
      execSync(`yarn add ${name}`, { stdio: "inherit" });
    }
    if (this.all) {
      execSync(`yarn add ${name}`, { stdio: "inherit" });
      execSync(`yarn add @asow/ui`, { stdio: "inherit" });
      console.log("yarn add xxx 3 ...");
    }
  }
}

module.exports = AsowPackage;
