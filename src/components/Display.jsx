import React from 'react'
import { connect } from 'react-redux'

const Display = ({name}) => (
<h2>{name}</h2>
)

const mapStateToProps = state => ({
    name: state.name
})

export default connect(mapStateToProps, null)(Display)