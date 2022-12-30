// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.


// what is going to invoke initialize?
// what is going to invoke fetch?

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: () => {
    App.username = window.location.search.substr(10);

    // originally initialized everything up here

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(() => {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    })

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    // setTimeout(() => window.location.reload(), 10000)
  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data); // <-- an array of objects

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      // most likely this is where we'll update the DOM and re-render
      // make call to receive messages

      // store data into messages -- adding to that storage
      // `filter` data into Messages._data --> username, text, roomname
      // the room DS is an obj of roomname props,
      // the props have an array of all msgs containing that roomname as their val

      data.forEach(message => {
        let {username, text, roomname, github_handle} = message;

        Messages._data.push( {username, text, roomname, github_handle} );
        Rooms._data['__AllTheMessages__'] = [];
        Rooms._data['__AllTheMessages__'].push( {username, text, roomname, github_handle} )

        if (!Rooms._data[roomname]) {
          Rooms._data[roomname] = [{username, text, roomname, github_handle}];
        } else {
          Rooms._data[roomname].push({username, text, roomname, github_handle});
        }
      });

      callback()

      RoomsView.$select.val('__AllTheMessages__');
    });

  },

  startSpinner: () => {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: () => {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
