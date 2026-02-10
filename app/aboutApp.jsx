import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import{ Link, link } from 'expo-router'

const aboutapp = () => {
  return (
    <View style={styles.container}>
      <Image source={('../assets/faviicon.png')} style={{ width: 100, height: 100 }} />

      <Text style={styles.regularText}>
        This is an introduction app created by Sylas and Isaiah. We are both students at the California State Bakersfield, and we are creating mobile app using React Native and Expo. We hope you enjoy our app!
      </Text>

      <Link href="/" style={styles.linkButton}> Back to Home Page</Link>
      <Link href="/aboutIsaiah" style={styles.linkButton}> About Isaiah</Link>
    </View>
  )
}

export default aboutapp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    boxShadow: ' 4px 6px rgba(0, 0, 0, 0.1)',
  },
  regularText: {
    fontSize: 16,
    fontWeight: "300"
  }
})