import { createStore } from 'redux';
import { sounds } from '../assets/sounds.json'

const initialState = {
  power: true,
  value: '',
  sounds: sounds,
  name: '',
  volumen: 50
}

const TEMPO = "TEMPO"
const POWERSWITCH = "POWERSWITCH"
const VOLUMENCHANGE = "VOLUMENCHANGE"

const soundsReducer = (state=initialState, action) => {
    switch (action.type){
      case TEMPO:
        return {...state, value: action.value, name: action.name}
      case POWERSWITCH:
        return {...state, power: action.power, value: '', name: ''}
      case VOLUMENCHANGE:
        return {...state, volumen: action.volumen}
      default:
        return state
    }
}

export default createStore(soundsReducer);
