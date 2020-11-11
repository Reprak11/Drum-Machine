import React from 'react'
import { connect } from 'react-redux'
import OneButton from './OneButton'

const Buttonpad = ({sounds}) => (
    //const buttons = sounds.map(element => <oneButton />)
    <div>
        {sounds.map(element => <OneButton buttonText={element.value}/>)}
    </div>
    
)

    


const mapStateToProps = state => (
    {
        sounds: state.sounds
    }
)

export default connect(mapStateToProps, null)(Buttonpad)