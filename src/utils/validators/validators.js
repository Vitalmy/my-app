export const required = (value) => {
  if (value) return undefined;
  return "Field Is Required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max Length is ${maxLength} symbols`;
  return undefined;
};
