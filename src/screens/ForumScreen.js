import React from 'react'
import { View, StyleSheet, TouchableOpacity, Button,  TextInput } from 'react-native'
import { Text } from 'react-native-paper'

//to be done
export default function ForumScreen() {
    return(
    <View style={ styles.container }>
        <Text style={styles.screenText}>  This will be forum ! </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BFA5'
    },
    screenText:{
        color: '#FFFFFF', 
        fontSize: 30,
        textAlign: 'center'
      }
})