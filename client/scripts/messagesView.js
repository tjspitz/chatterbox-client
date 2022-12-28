// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

// renders ALL messages

var MessagesView = {

  $chats: $('#chats'),

  // Perform any work which needs to be done when this view loads.
  // called when the page renders
  initialize: () => MessagesView.render(),

  // Render _all_ the messages
  // render will append each MESSAGE to the dom
  // by invoking renderMessage for each message
  render: () => Messages._data.forEach(message => MessagesView.renderMessage(message)),

  // `render` - deprecated
    // create a message element in the dom
    // add the information from the server about that message
    // add that element to the dom (within chats)

  // Render a single message - should add to the dom
  renderMessage: message => {
    // append MeesageView's _.template  to the 'chats' div
      // pass data obj into _.template w/ message's username, text, and roomname vals
    MessagesView.$chats.append(
      MessageView.render(
        {
        username: message.username,
        text: message.text
        // roomname: message.roomname
        }
      )
    );
  },

  // Handles a user clicking on a message
  handleClick: function(event) {
    // also needs to add the sender to the user's friend list

  }

};
