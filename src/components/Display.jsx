import React from 'react'
import { connect } from 'react-redux'

const Display = ({name}) => (
    <div className="display">
        <h2>{name}</h2>
    </div>
    
)

const mapStateToProps = state => ({
    name: state.name
})

export default connect(mapStateToProps, null)(Display)