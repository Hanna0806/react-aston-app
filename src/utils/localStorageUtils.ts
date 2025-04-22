export const getFromLocalStorage = (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn(`Error getting key "${key}" from localStorage`, e);
      return null;
    }
  };
  
  export const setToLocalStorage = (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn(`Error setting key "${key}" to localStorage`, e);
    }
  };
