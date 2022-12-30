// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    // click event-invoke handleSubmit function
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // event is passed to handleSubmit mehtod
    event.preventDefault();

    // use .val for forms, inputs, and selects/options
    let $text = $('#message').val();
    let $roomname = $('select option:selected').val();

    // invoke parse.create, pass in msg object
      // data stored in App.username, $text, $roomname
    Parse.create(
      {
        username: App.username,
        text: $text,
        roomname: $roomname
      }
    )

    setTimeout(() => location.reload(true), 500);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};