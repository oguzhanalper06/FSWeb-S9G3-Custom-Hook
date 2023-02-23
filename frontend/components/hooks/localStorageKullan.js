import React from "react";
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key); //? sayfa yenilendiğinde key var mı
    return item ? JSON.parse(item) : initialValue; //? item var mı diye bakıyoruz yoksa ilk değeri alıyoruz(initial value)
  });
  //state yazma
  const setValue = (value) => {
    setStoredValue(value); //state yazıyoruz
    window.localStorage.setItem(key, JSON.stringify(value)); //state yazdığımızı localStorage atıyoruz
  };
  return [storedValue, setValue];
};
