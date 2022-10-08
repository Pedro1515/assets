export const handleSortObjsBy = (list, sortByProperty) => {
  const sort = list.sort((a, b) => {
    if (a[sortByProperty] < b[sortByProperty]) {
      return -1;
    }
    if (a[sortByProperty] > b[sortByProperty]) {
      return 1;
    }
    return 0;
  });

  return sort;
};

export default handleSortObjsBy;
