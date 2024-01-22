import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function Calendar(){
    return (
        <View style={styles.container}>
            <Text>THIS IS THE Calendar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})