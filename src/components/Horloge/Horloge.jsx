import React, {useState} from 'react'


const Horloge = (props) => {
props = {
    seconde: 0,
    minute: 0,
    hour : 1
  }

  return ( 
    <div className="bg-orange-500 flex">
      <div>
        {props.hour}
      </div>
      <div>
        {props.minute}
      </div>
      <div>
        {props.seconde}
      </div>
    </div> 
  )
  this.props.seconde = this.props.seconde + 1;
}
export default Horloge