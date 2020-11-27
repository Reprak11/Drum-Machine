import React from 'react'
import { connect } from 'react-redux'


const OneButton = ({buttonText, soundURL,keyletter, name,changeSound}) => {

const actionButton = () => {
    changeSound(name, soundURL)
    //document.getElementById(name).play()
}
//<audio id={name} src= {soundURL}></audio>
return (
    <button className="cacafuti-200" type="button" onClick={actionButton}>{buttonText}</button>
)
}


const mapDispatchToProps = (dispatch) => (
    {
        changeSound: (name, soundURL) => {dispatch({
            type: 'TEMPO',
            name: name,
            soundURL: soundURL
            })
        }
    }
)

export default connect(null, mapDispatchToProps)(OneButton)