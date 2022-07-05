export const sortArray = (arr) => {
  return arr.sort((a, b) => {
    return a.id - b.id;
  });
};
