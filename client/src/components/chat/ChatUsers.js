// Handling users in the chatroom

// Storing users in chat
const chatUsers = [];

const addUser = ({ name, room, id }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Searching through users
  const currentUser = chatUsers.find(function (user) {
    return chatUsers.room === room && user.name === name;
  });
  // Error if user chooses username already taken
  if (currentUser) {
    return { error: "Username is taken! Please choose another username" };
  }
  // Adding new users
  const newUser = { name, room, id };
  chatUsers.push(newUser);
  // Returning to show what user was added
  return { newUser };
};

// Getting users
const findUser = (id) => {
  return chatUsers.find(function (user) {
    return user.id === id;
  });
};

module.exports = { addUser, findUser };
