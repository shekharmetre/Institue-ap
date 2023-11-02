export const getSender = (logged_user, user) => {
  return user[0]._id === logged_user._id ? user[1].name : user[0].name;
};
export const isLastMesssage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

// explaining second message
// messages this parameter is an array of messages.
// i ths parameter represents the index of the current message that you want to check
// userId this parameter is the user ID of the currently logged-in user.
// The function returns true if all of the following conditios are met for the specific message(messsages[i]).
//
