class Publisher {
  // * Firstly the publisher should be constructed first

  constructor() {
    this.listeners = [];
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  notify(message) {
    for (const listener of this.listeners) {
      listener(message);
    }
  }

  // * This could be even simpler, but I opted to take an approach that support
  // * any number of publishers/subscribers — not just one.
}

module.exports = new Publisher();
