import React from 'react'
import PowerButton from './PowerButton'
import Display from './Display'
import VolumenControl from './VolumeControl'

const AudioControl = () =>(
    <div>
        <div>
            <h3>Power</h3>
            <PowerButton />
        </div>
        <Display />
        <div>
            <h3>Volumen</h3>
            <VolumenControl />
        </div>
    </div>
)

export default AudioControl