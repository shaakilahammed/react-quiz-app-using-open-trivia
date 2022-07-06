export const htmlEncode = (string) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = string;
  return txt.value;
};
