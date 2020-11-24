import React from 'react';
import './App.css';
import Title from "./components/Title"
import Beatbox from "./components/Beatbox"
import { connect } from 'react-redux'



function App({changeKeySound}) {
    const handleKeyPress = event => {
        changeKeySound(event.key)
    };
  return (
    <div tabIndex="0" onKeyPress={handleKeyPress}>
      <Title />
      <Beatbox />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
      changeKeySound: (keyPressed) => {dispatch({
          type: 'KEY',
          keyPressed: keyPressed 
          })
      }
  }
)

export default connect(null, mapDispatchToProps) (App);
