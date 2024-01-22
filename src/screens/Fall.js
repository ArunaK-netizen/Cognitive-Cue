import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function Fall(){
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>THIS IS THE Fall</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle:{
        color: "white"
    }
})