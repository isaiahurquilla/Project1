import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bootzie from '../assets/BootSmug.png'
import { Link, link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={Bootzie} style={{ width: 100, height: 100 }} />

      <Text style={styles.title}> Welcome to Our Introduction App</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>
        by Sylas and Isaiah
      </Text >

      <View style={styles.card}>
        <Link href="/aboutApp" style={styles.linkButton}> About our app</Link>
        <Link href="/aboutIsaiah" style={styles.linkButton}> About Isaiah</Link>
        <Link href="/aboutSylas" style={styles.linkButton}> About Sylas</Link>
      </View>
    </View>
  )
}

export default index

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
  }
})