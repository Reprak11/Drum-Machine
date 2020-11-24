import React from 'react'
import { connect } from 'react-redux'

const PowerButton = ({power,changePower}) => {
    const inputAction = () => {
        if (power){
            changePower(false)
        } else {
            changePower(true)
        }
    }
    return (<div>
        <label>
            <input onClick={inputAction} type="checkbox" />
            <span />
        </label>
    </div>)
}

const mapStateToProps = state => ({
    power: state.power
})

const mapDispatchToProps = dispatch => ({
    changePower: (powerState) =>{dispatch({
        type: "POWERSWITCH",
        power: powerState
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PowerButton)