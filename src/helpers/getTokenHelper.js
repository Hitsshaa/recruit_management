export const returnLocalStorageTocken = () => {
  const keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    const val = localStorage.getItem(keys[i]);
    try {
      const json = JSON.parse(val);
      if (json.credentialType === "IdToken") {
        return json.secret;
      }
    } catch (e) {
      return false;
    }
  }
};
