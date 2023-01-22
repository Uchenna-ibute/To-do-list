const updateLocalStorage = (tasks) => {
  localStorage.setItem('store', JSON.stringify(tasks));
};

export default updateLocalStorage;