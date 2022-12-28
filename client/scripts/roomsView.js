// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: () => {
    RoomsView.render()
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

  },

  // Handle the user clicking the "Add Room" button
  handleClick: function(event) {
  }

};
