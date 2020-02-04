module.exports = {
  /**
   * @param {String} event
   * @param {Object} subscriber
   * @param {Function} handler
   */
  clients: [],
  on: function(event, subscriber, handler) {
    if (!this.clients.includes(subscriber)) {
      this.clients.push(subscriber);
    }
    if (!Object.keys(subscriber).includes(event)) {
      subscriber[event] = [];
    }
    subscriber[event].push(handler);

    return this;
  },

  /**
   * @param {String} event
   * @param {Object} subscriber
   */
  off: function(event, subscriber) {
    if (this.clients.includes(subscriber) && subscriber[event]) {
      this.clients.forEach(function(client) {
        if (client === subscriber) {
          if (client[event]) {
            client[event] = [];
          }
        }
      });
    }
    return this;
  },

  /**
   * @param {String} event
   */
  emit: function(event) {
    this.clients.forEach(function(client) {
      if (client[event]) {
        var handlers = client[event];
        handlers.forEach(function(handler) {
          handler.apply(client);
        });
      }
    });
    return this;
  }
};
