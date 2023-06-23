import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.bgContainer}>
      <Text>ALl Projects</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  bgContainer:{
    flex:1,
    // justifyContent:"center",
    fontSize:30,
    alignItems:"center"
    , margin:20

  }
})