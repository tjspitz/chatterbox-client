// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.


var Friends = {
  // should be a graph (most likely)
  _data: [], // <-- no Tammam ---> [Tammam]

  // method to make one user a friend with another
  toggleStatus: (event) => {

    let $newFriend = $(event.currentTarget).text();
    let $chatChildren = MessagesView.$chats.find('.chat')

    // if they're not your friend yet
    if (!Friends._data.includes($newFriend)) {
      Friends._data.push($newFriend);
      // console.log('added friend...', Friends._data)
      for (let i = 0; i < $chatChildren.length; i ++) {
        let $username = $($chatChildren[i]).find('.username');
        if (Friends._data.includes($username.text())) {
          $username.parent().attr('class', 'chat friend');
        }
      }
    } else {
      // they are your friend, clicking username un-friends them
      for (let j = 0; j < $chatChildren.length; j ++) {
        let $username = $($chatChildren[j]).find('.username');
        debugger;
        if (Friends._data.includes($username.text())) {
          $username.parent().attr('class', 'chat');
        }
      }
      Friends._data.pop($newFriend);
      // console.log('removed friend...', Friends._data);
    }


  },

  // method to determine if two users are friends?

};

