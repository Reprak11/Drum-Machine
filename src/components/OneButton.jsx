import React from 'react'
import { connect } from 'react-redux'


const OneButton = ({buttonText, soundURL, handleKey,keyletter, name,changeSound}) => {

const actionButton = () => {
    changeSound(name)
    document.getElementById(name).play()
}

return (<div>
    <button onKeyDown={(e) => handleKey(e,keyletter)} onClick={actionButton}>{buttonText}</button>
    <audio id={name} src= {soundURL}></audio>
</div>)
}


const mapDispatchToProps = (dispatch) => (
    {
        changeSound: (name) => {dispatch({
            type: 'TEMPO',
            name: name
        })
    }
    }
)

export default connect(null, mapDispatchToProps)(OneButton)