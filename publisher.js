class Publisher {
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
}

module.exports = new Publisher();
