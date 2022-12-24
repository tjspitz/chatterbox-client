// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.

  // need a .roomname property?
  // guess is that we'll use this to interpret the server response into a consumable set of data for message
  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->
    `)
};