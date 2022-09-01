import { makeObservable, observable, action } from 'mobx';
import { createContext } from 'react';

class Store {
  darkMode: boolean = false;

  constructor() {
    makeObservable(this, {
      darkMode: observable,
      setDarkMode: action,
    });
  }

  setDarkMode = () => {
    if (this.darkMode) {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }
  };
}

export default createContext(new Store());
