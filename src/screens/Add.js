import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function Add(){
    return (
        <View style={styles.container}>
            <Text>THIS IS THE ADD</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})