import React from 'react'
import PowerButton from './PowerButton'
import Display from './Display'
import VolumenControl from './VolumeControl'

const AudioControl = () =>(
    <div>
        <Display />
        <div className="controls">
            <div className="one-control">
                <h3 className="control-text">Power</h3>
                <PowerButton />
            </div>
            <div className="one-control">
                <h3 className="control-text">Volume</h3>
                <VolumenControl />
            </div>
        </div>
    </div>
)

export default AudioControl