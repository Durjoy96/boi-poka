const getStoredData = () => {
  const isExist = localStorage.getItem("read");
  if (isExist) {
    return JSON.parse(isExist);
  } else {
    return [];
  }
};

const setDataToLocalStorage = (id) => {
  const storedData = getStoredData();
  if (storedData.includes(id)) {
    alert("already exist");
  } else {
    storedData.push(id);
    const storedDataStr = JSON.stringify(storedData);
    localStorage.setItem("read", storedDataStr);
  }
};

export { setDataToLocalStorage };
