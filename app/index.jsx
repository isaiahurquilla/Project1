import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bootzie from '../assets/BootSmug.png'
<<<<<<< HEAD
import { Link, link } from 'expo-router'
=======
import Shadow from '../assets/Shadow.jpg'
import LinkButton from './LinkButton'
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a

const index = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Image source={Bootzie} style={{ width: 100, height: 100}} />

      <Text style={styles.title}> Welcome to Our Introduction App</Text>
      <Text style={{marginTop: 10, marginBottom: 30, textAlign: 'center', width: '100%' }}>
        by Sylas and Isaiah
      </Text>

      <View style={styles.card}>
        <Link href="/aboutApp" style={styles.linkButton}> About our app</Link>
        <Link href = "/goalsPage" style={styles.linkButton}> Goals and Plans</Link>
        <Link href="/aboutIsaiah" style={styles.linkButton}> About Isaiah</Link>
        <Link href="/aboutSylas" style={styles.linkButton}> About Sylas</Link>
        <Link href="/Gallery" style={styles.linkButton}> Gallery</Link>
      </View>
=======
    <View style={styles.imageRow}>
      <Image source={Bootzie} style={{ width: 200, height: 200 }} />
      <Image source={Shadow} style={{ width: 200, height: 200 }} />
    </View>
      <Text style={styles.title}>Introduction App {"\n\n"}</Text>
        <LinkButton href="/aboutApp">About our app</LinkButton>
        <LinkButton href="/goalsPage">Goals and Plans</LinkButton>
        <LinkButton href="/aboutIsaiah">About Isaiah</LinkButton>
        <LinkButton href="/aboutSylas">About Sylas</LinkButton>
      <LinkButton href="/Gallery">Gallery</LinkButton>
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
  linkButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
=======
  imageRow: {
    flexDirection: 'row',      //  puts them side by side
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,                   // spacing between the images
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
    marginBottom: 20,
  }
})