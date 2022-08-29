import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Horloge2 from '../Horloge/Horloge2.jsx';

class SlideBar extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      inputH : ''
    };
  }
  onChange(e){
    this.setState({
      inputH : e.target.value
    })
  }

  reseter(){
    const word = this.state.inputH.split(":");
    this.setState({
      hour: parseInt(this.word[0]), 
      minute: parseInt(this.word[1]),
      seconde: parseInt(this.word[2]) 
    })
  }
  render() {
    return (
      <div className='block float-left text-white font-mono h- w-36 bg-black'>
        <div className='mb-4'>
          <form action="" className='block text-white'>
            <input type="text" onChange={this.onChange} value={this.state.inputH} className='w-28 pr-8 mb-2 text-sm text-white bg-indigo-600 rounded-md' name="time-reset" placeholder="Format 00:00:00"/>
            <button type="submit" className='bg-red-600 px-8 rounded-md ' onClick={this.reseter} >Reset</button>
          </form>
        </div>
        <div>
         <button className='bg-white text-black rounded-md'>Historique</button>
        </div>
      <div id="reset-form">
          
      </div>
    </div>    
    )
  }
}

export default SlideBar