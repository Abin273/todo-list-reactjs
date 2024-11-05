export const addItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key) => {
    const items = localStorage.getItem(key);
    return JSON.parse(items);
};
