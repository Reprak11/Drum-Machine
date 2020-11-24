import { createStore } from 'redux';
import { sounds } from '../assets/sounds.json'

const initialState = {
  power: false,
  value: '',
  sounds: sounds,
  name: '',
  volume: 50
}

const TEMPO = "TEMPO"
const POWERSWITCH = "POWERSWITCH"
const VOLUMENCHANGE = "VOLUMENCHANGE"
const KEY = "KEY"

const playAudio = (soundURL, volumeValue) => {
  const audio = new Audio (soundURL)
  audio.volume=volumeValue/100
  audio.play()
}

const soundsReducer = (state=initialState, action) => {
    switch (action.type){
      case TEMPO:
        if (state.power){
          playAudio(action.soundURL, state.volume)
          return {...state, name: action.name}
        } else {
          return state
        }
      case POWERSWITCH:
        return {...state, power: action.power, value: '', name: ''}
      case VOLUMENCHANGE:
        return {...state, volume: action.volume}
      case KEY:
      if (state.power){
        if (action.keyPressed === 'q'){
          playAudio(sounds[0].soundURL, state.volume)
          return {...state, name: sounds[0].soundName}
        } else if (action.keyPressed === 'w'){
          playAudio(sounds[1].soundURL, state.volume)
          return {...state, name: sounds[1].soundName}
        } else if (action.keyPressed === 'e'){
          playAudio(sounds[2].soundURL, state.volume)
          return {...state, name: sounds[2].soundName}
        } else if (action.keyPressed === 'a'){
          playAudio(sounds[3].soundURL, state.volume)
          return {...state, name: sounds[3].soundName}
        } else if (action.keyPressed === 's'){
          playAudio(sounds[4].soundURL, state.volume)
          return {...state, name: sounds[4].soundName}
        } else if (action.keyPressed === 'd'){
          playAudio(sounds[5].soundURL, state.volume)
          return {...state, name: sounds[5].soundName}
        } else if (action.keyPressed === 'z'){
          playAudio(sounds[6].soundURL, state.volume)
          return {...state, name: sounds[6].soundName}
        } else if (action.keyPressed === 'x'){
          playAudio(sounds[7].soundURL, state.volume)
          return {...state, name: sounds[7].soundName}
        } else if (action.keyPressed === 'c'){
          playAudio(sounds[8].soundURL, state.volume)
          return {...state, name: sounds[8].soundName}
        } else {
          return state
        }
      } else {
        return state
      }  
      default:
        return state
    }
}

export default createStore(soundsReducer);
