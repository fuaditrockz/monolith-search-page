import React from 'react'
import psyduck from '../../assets/psyduck.png'
import bulbasaur from '../../assets/bulbasaur.png'
import pidgeot from '../../assets/pidgeot.png'

class NoResult extends React.Component {
  renderIcon() {
    const { noResultType } = this.props
    switch (noResultType) {
      case 'searching':
        return pidgeot
      case 'no-result':
        return psyduck
      case 'idle':
        return bulbasaur
      default:
        return null
    }
  }
  render() {
    const { message, noResultType } = this.props
    return (
      <div className='universal-container centerized-item width-full'>
        {noResultType && <img src={this.renderIcon()} alt='not_found' width={100} />}
        <h4>{message}</h4>
      </div>
    )
  }
}

export default NoResult