var React = require('react')
var PropTypes = React.PropTypes
var transparentBg = require('../styles').transparentBg

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING... </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-6">
            <p className="lead">Player One</p>
            PLAYER ONE INFO
          </div>
          <div className="col-sm-6">
            <p className="lead">Player Two</p>
            PLAYER TWO INFO
          </div>
        </div>

        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            INITIATE BATTLE BUTTON
          </div>
          <div className="col-sm-12" style={styles.space}>
            LINK TO /PLAYERONE
          </div>
        </div>
      </div>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle
