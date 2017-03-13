var axios = require('axios')
// in case you get rate limited
var id = "YOUR_CLIENT_ID"
var sec = "YOUR_SECRET_ID"
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function(players) {
    // fetch data from github via Axios by looping over the players array w/ dot map
    // calling getUserInfo and returning the data
    return axios.all(players.map(function(username){
      return getUserInfo(username)
    })).then(function(info){
      return info.map(function(user){
        return user.data
      })
    }).catch(function(err){
      console.warn('Error in getPlayersInfo', err)
    })
  }
}

module.exports = helpers;
