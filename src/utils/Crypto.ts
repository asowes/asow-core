import CryptoJS from "crypto-js";

const DEFAULT_KEY = "Asow_F*(^@!:DNJKOS65464R@!F";

const generateKeyFromPassphrase = (passphrase?: string): string => {
  return CryptoJS.SHA256(passphrase || DEFAULT_KEY)
    .toString(CryptoJS.enc.Hex)
    .substring(0, 32);
};

const encryptMessage = (message: string, secretKey: string): string => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

const decryptMessage = (
  encryptedMessage: string,
  secretKey: string
): string => {
  return CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(
    CryptoJS.enc.Utf8
  );
};

export {
  DEFAULT_KEY,
  generateKeyFromPassphrase,
  encryptMessage,
  decryptMessage,
};
