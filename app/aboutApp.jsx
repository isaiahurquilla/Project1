import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
<<<<<<< HEAD
import{ Link, link } from 'expo-router'
=======
import LinkButton from './LinkButton'
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a

const aboutapp = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/favicon.png')} style={{ width: 100, height: 100 }} />

<<<<<<< HEAD
      <Text style={[styles.regularText, { marginTop: 20, marginBottom: 20 }]}>
        This is an introduction app created by Sylas and Isaiah. We are both students at the California State Bakersfield, and we are creating mobile app using React Native and Expo. We hope you enjoy our app!
      </Text>

      <Link href="/" style={styles.linkButton}> Back to Home Page</Link>
=======
      <Text style={[styles.regularText, { marginTop: 20, marginBottom: 20, textAlign: 'center', width: '50%' }]}>
        This is an introduction app created by Sylas and Isaiah. 
        We are both students at the California State Bakersfield,
        and we are creating mobile app using React Native and Expo. 
        We hope you enjoy our app!{"\n\n"}
      </Text>

      <LinkButton href="/">Back to Home Page</LinkButton>
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
    </View>
  )
}

export default aboutapp

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#b8b8b8ff',
=======
    backgroundColor: '#ADD8E6',
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
  linkButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    boxShadow: ' 4px 6px rgba(0, 0, 0, 0.1)',
  },
=======
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
  regularText: {
    fontSize: 16,
    fontWeight: "300"
  }
})