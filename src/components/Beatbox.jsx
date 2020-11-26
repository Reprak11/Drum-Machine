import React from 'react'
import Buttonpad from './Buttonpad'
import AudioControl from './AudioControl'


const Beatbox = ({changeKeySound}) => {

    return (<div className="beatbox">
        <AudioControl />
        <Buttonpad />
    </div>)
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

export default Beatbox