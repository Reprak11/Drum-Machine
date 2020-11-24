import React from 'react'
import { connect } from 'react-redux'

const VolumeControl = ({volume, changeVolume}) => {
    const handleVolume = e =>{
        changeVolume(e.target.value)
    }
    return(<input type="range" min="0" max="100" step="1" value={volume} onChange={handleVolume}/>)
}

const mapStateToProps = state => ({
    volume: state.volume
})

const mapDispatchToProps = dispatch => ({
    changeVolume: (volumeValue) => {dispatch({
        type: "VOLUMENCHANGE",
        volume: volumeValue
    })}
})

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControl)