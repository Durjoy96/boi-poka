const getStoredData = () => {
  const isExist = localStorage.getItem("wishlist");
  if (isExist) {
    return JSON.parse(isExist);
  } else {
    return [];
  }
};

const setWishListDataToLocalStorage = (id) => {
  const storedData = getStoredData();
  if (storedData.includes(id)) {
    alert("already exist");
  } else {
    storedData.push(id);
    const storedDataStr = JSON.stringify(storedData);
    localStorage.setItem("wishlist", storedDataStr);
  }
};

export { setWishListDataToLocalStorage };
