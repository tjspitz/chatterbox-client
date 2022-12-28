// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

// wheredoes the event argument come from? Maybe the input from the user?


var FormView = {

  $textForm: $('#send'),


  initialize: function() {
    // click event-invoke handleSubmit function
    FormView.$textForm.on('submit', FormView.handleSubmit);
  },


  handleSubmit: function(event) {
    // event is passed to handleSubmit mehtod
    event.preventDefault();

    // invoke parse.create, pass in msg object
    let $text = $('#message');
    let $roomname = $('option');

    $text = $text.val(); // good


    $roomname = $roomname.val();

    console.log('username: ', App.username, 'text: ', $text, 'roomname: ', $roomname)
    Parse.create(
      {
        username: App.username,
        text: $text,
        roomname: $roomname
      }
    )

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$textForm.find('input[type=submit]').attr('disabled', status);
  }

};