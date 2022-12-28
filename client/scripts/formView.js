// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

// wheredoes the event argument come from? Maybe the input from the user?


var FormView = {

  $form: $('form'),

  initialize: function() {
    // click event-invoke handleSubmit function
    FormView.$form.on('submit', FormView.handleSubmit);
  },


  handleSubmit: function(event) {

    // if the form is empty
      // Stop the browser from submitting the form
      // event is passed to handleSubmit mehtod
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};