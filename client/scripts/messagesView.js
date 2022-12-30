// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

// renders ALL messages

var MessagesView = {

  $chats: $('#chats'),

  // Perform any work which needs to be done when this view loads.
  // called when the page renders
  initialize: () => {
    MessagesView.render()
  },

  // Render _all_ the messages
  render: (messageSet = Messages._data) => {
    messageSet.forEach(message => MessagesView.renderMessage(message))
  },

  // Render a single message - should add to the dom
  renderMessage: message => {
    // append MesageView's _.template  to the 'chats' div
      // pass data obj into _.template w/ message's username, text, and roomname vals
    let $chat = $(MessageView.render(
      {
      username: message.username,
      text: message.text,
      github_handle: `(${message.username} is actually ${message.github_handle})`
      }
    ))

    let $username = $chat.find('.username');
    $username.on('click', Friends.toggleStatus)
    MessagesView.$chats.append($chat)
  },

  // Handles a user clicking on a message
  handleClick: function(event) {

  }

};
