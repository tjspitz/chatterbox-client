// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: () => {
    RoomsView.render()

    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  // Render out the list of rooms
  render: () => {
    // append the KEY ('name') to the $select el
    // with the appropriate extra sauce
    _.each(Rooms._data, (room, name) => {
      RoomsView.renderRoom(name)
    })

  },

  // Render out a single room.
  renderRoom: name => {

    let $curOption = $('<option></option>');
      $curOption.attr( {value: name} );
      $curOption.text(name);
      RoomsView.$select.append($curOption);
  },

  // Handle a user selecting a different room.
  handleChange: function(event) {

    let $thisRoom = $('select option:selected').val();

    MessagesView.$chats.html('');
    if ($thisRoom === '__AllTheMessages__') {
      MessagesView.render()
    } else {
      MessagesView.render(Rooms._data[$thisRoom]);
    }

  },

  // Handle the user clicking the "Add Room" button
  handleClick: function(event) {
    var newRoom = window.prompt('Name your new room...' || 'lobby');

    if (Rooms._data[newRoom]) {
      alert('This room already exists!')
    } else {
      RoomsView.renderRoom(newRoom)
    }

  }

};
