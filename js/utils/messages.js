const BASE_PATH = 'https://moin-backend.herokuapp.com/';

module.exports = {
  list: () => {
    return fetch(BASE_PATH + 'messages').then(res => res.json())
  },

  send: (user, message) => {
    return fetch(BASE_PATH + 'message', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user, message,}),
    })
    .then(res => res.json())
  },
};