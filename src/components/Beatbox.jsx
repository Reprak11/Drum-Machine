import React from 'react'
import Buttonpad from './Buttonpad'
import AudioControl from './AudioControl'


const Beatbox = ({changeKeySound}) => {

    return (<div>
        <Buttonpad />
        <AudioControl />
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