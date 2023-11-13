const originalLog = console.log;
console.log = function (...args) {
  const timestamp = new Date().toLocaleTimeString();
  if (typeof window !== "undefined") {
    const styles = "font-weight: bold";
    originalLog.apply(console, [`%c[${timestamp}]`, styles, ...args]);
  } else {
    originalLog.apply(console, [`[${timestamp}]`, ...args]);
  }
};
