import React from 'react'
import { connect } from 'react-redux'
import OneButton from './OneButton'

const Buttonpad = ({sounds}) => {
    //const buttons = sounds.map(element => <oneButton />)

    const handleKey = (e, value) => {
        if (e.keyCode === value){
            console.log(e)
        }
    }

return(<div>
        {sounds.map(element => <OneButton handleKey={handleKey} keyletter={element.keyletter} buttonText={element.value} soundURL={element.soundURL} name={element.soundName}/>)}
    </div>)
    
}

const mapStateToProps = state => (
    {
        sounds: state.sounds,
    }
)

export default connect(mapStateToProps, null)(Buttonpad)