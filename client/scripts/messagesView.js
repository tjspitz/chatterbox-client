// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

// renders ALL messages

var MessagesView = {

  $chats: $('#chats'),

  // Perform any work which needs to be done when this view loads.
  // called when the page renders
  initialize: () => MessagesView.render(),

  // Render _all_ the messages
  render: () => {
    console.log('rendering...?');

    // render will append each MESSAGE to the dom
    // perhaps by invoking renderMessage for each message
    Messages._data.forEach(message => MessagesView.renderMessage(message))

    // create a message element in the dom
    // add the information from the server about that message
    // add that element to the dom (within chats)
    // readAll: function(successCB, errorCB = null) {
  },

  // Render a single message - should add to the dom
  renderMessage: message => {
    console.log('message: ', message)

    let html = '';
    html += MessageView.render(message);
    MessagesView.$chats.append(html);

    // let $newMessage = $('<div>' + message + '</div>');
    // $newMessage.appendTo(MessagesView.$chats);
    // console.log(message);
  },

  // Handles a user clicking on a message
  handleClick: function(event) {
    // also needs to add the sender to the user's friend list
  }

};
