// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

// renders ALL messages

var MessagesView = {

  $chats: $('#chats'),

  // Perform any work which needs to be done when this view loads.
  // called when the page renders
  initialize: function() {
  },

  // Render _all_ the messages
  render: function() {
    // create a message element in the dom
    // add the information from the server about that message
    // add that element to the dom (within chats)
    // readAll: function(successCB, errorCB = null) {
  },

  // Render a single message - should add to the dom
  renderMessage: function(message) {
    var $newMessage = $('<div>' + message + '</div>');
    $newMessage.appendTo(MessagesView.$chats);
    console.log(message);
  },

  // Handles a user clicking on a message
  handleClick: function(event) {
    // also needs to add the sender to the user's friend list
  }

};
