import React from 'react'
import { connect } from 'react-redux'
import OneButton from './OneButton'

const Buttonpad = ({sounds}) => {
    //const buttons = sounds.map(element => <oneButton />)


return(<div className="button-grid">
        {sounds.map(element => <OneButton keyletter={element.keyletter} buttonText={element.value} soundURL={element.soundURL} name={element.soundName}/>)}
    </div>)
    
}

const mapStateToProps = state => (
    {
        sounds: state.sounds,
    }
)


export default connect(mapStateToProps, null)(Buttonpad)