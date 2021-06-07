export const findByDataAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
