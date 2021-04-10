import { writable } from "svelte/store";
import * as data from "./data";
import CryptoJS from "crypto-es";
export const dataStore = writable({ ok: false, ...data });

function _decipher(message = "", key = "") {
  const code = CryptoJS.AES.decrypt(message, key);
  const decryptedMessage = code.toString(CryptoJS.enc.Utf8);

  return decryptedMessage;
}

const validVerifyMessage = "U2FsdGVkX18HLjWDxP85nu8CJslcGP18Pckr4KiaQuQ=";

export const decipher = (pass) => {
  try {
    if (_decipher(validVerifyMessage, pass) !== "OK") {
      return;
    }
  } catch {
    return;
  }

  //TODO not that okay, to ?update? even if data deciphered
  dataStore.update((data) => {
    let { ok, srcs, message } = data;
    if (ok) {
      return data;
    }
    message = _decipher(message, pass);
    srcs = srcs.map((val) => _decipher(val, pass));
    return { ok: true, srcs, message };
  });
};
