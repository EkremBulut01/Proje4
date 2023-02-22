import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function App() {
    return (
      <View style={styles.container}>
        <LinearGradient
         start={{ x: 0, y: 0.5 }}
         end={{ x: 1, y: 0.5 }}
          colors={['#92A3FD', '#9DCEFF']}
          style={styles.linearGradient}
        >
          <Text>Vertical Gradient</Text>
        </LinearGradient>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
})
export default App