import React from 'react'
import { View, Text} from 'react-native'
import {connect} from 'react-redux'
import { removeError } from '../actions/error'


class ErrorComponent extends React.Component {
    constructor(props){
        super(props)
        this.removeError = this.removeError.bind(this);
    }

    removeError(){
        this.props.dispatch(removeError())
    }

    render(){
        const { error } = this.props
        return (
            error ?
            <View className="error-wrapper" onClick={this.removeError}>
                <Text className="error">{error}</Text>
            </View>
            :
            null
        )
    }
}

function mapStateToProps ({error}){
    return {
        error
    }
}

export default connect(mapStateToProps)(ErrorComponent);