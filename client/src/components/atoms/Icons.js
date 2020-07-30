import React from 'react'
import { SearchIcon } from '../../helpers/icons'

class Icon extends React.Component {
  getPath() {
    const { name, color } = this.props
    switch (name) {
      case 'search':
        return (
          <SearchIcon fill={color}/>
        )  
      default:
        break;
    }
  }

  render() {
    const { size } = this.props
    return (
      <svg
        version="1.1"
        id="Capa_1"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 451 451"
        style={{enableBackground: 'new 0 0 451 451'}}
        xmlSpace="preserve"
      >
        <g>
          {this.getPath()}
        </g>
      </svg>
    )
  }
}

export default Icon