class WindowSingleton {
  #registeredListScroll = [];

  #ScrollHandler = (event) => {
    const windowSize = { width: window.innerWidth, height: window.innerHeight };
    Object.freeze(windowSize);
    this.#registeredListScroll.forEach((callback) => {
      callback(event, windowSize);
    });
  };

  registerScroll (callback) {
    this.#registeredListScroll.push(callback);
    if (this.#registeredListScroll.length === 1) {
      window.addEventListener('scroll', this.#ScrollHandler);
    }
  }

  removeScroll (callback) {
    const index = this.#registeredListScroll.findIndex(
      (item) => item === callback,
    );

    if (index !== -1) {
      this.#registeredListScroll.splice(index, 1);
    }

    if (this.#registeredListScroll.length) {
      window.removeEventListener('scroll', this.#ScrollHandler);
    }

  }

}

const windowSingletonObj = new WindowSingleton();

export { windowSingletonObj as WindowSingleton };
