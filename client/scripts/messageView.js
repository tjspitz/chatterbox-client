// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // need a .roomname property?
  // guess is that we'll use this to interpret the server response into a consumable set of data for message
  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %>></div>
        <div class="roomname"><%- roomname %>></div>
      </div>
      -->
    `)
};

// message view - takes care of XSS attacks by sanitizing a message

// https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/preventing_xss/preventing_xss.html#underscore-js-template-files

/*

var compiled = _.template("<% print('Hello ' + epithet); %>");
compiled({epithet: "stooge"});
=> "Hello stooge"

what comes out is what the javascript takes -- grab the username by using the interpolation


*/