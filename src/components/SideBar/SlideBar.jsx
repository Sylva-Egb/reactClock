import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Reset from '../Reset/Reset.jsx'

class SlideBar extends Component {
  reseter(){
      <Reset/>
  }
  render() {
    return (
      <div className='block float-left text-white font-mono max-h-max w-36 bg-indigo-600'>
        <div className='mb-4'>
         <button className='bg-red-600 px-8 rounded-md ' onClick={this.reseter} >Reset</button>
        </div>
        <div>
         <button className='bg-black rounded-md'>Historique</button>
        </div>
      <div id="reset-form">
          
      </div>
    </div>    
    )
  }
}

export default SlideBar