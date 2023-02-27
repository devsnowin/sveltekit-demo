export const serializeNonPoJOs = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};
