import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinkButton from './LinkButton'

const aboutapp = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/favicon.png')} style={{ width: 100, height: 100 }} />

      <Text style={[styles.regularText, { marginTop: 20, marginBottom: 20, textAlign: 'center', width: '50%' }]}>
        This is an introduction app created by Sylas and Isaiah. 
        We are both students at the California State Bakersfield,
        and we are creating mobile app using React Native and Expo. 
        We hope you enjoy our app!{"\n\n"}
      </Text>

      <LinkButton href="/">Back to Home Page</LinkButton>
    </View>
  )
}

export default aboutapp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 16,
    fontWeight: "300"
  }
})