import React from 'react'
import Backbar from '../backBar'
class Myself extends React.Component {
  render() {
    return (
      <div className="App-Myself">
        <Backbar title="我的" history={this.props.history} />
      </div>
    )
  }
}
export default Myself
