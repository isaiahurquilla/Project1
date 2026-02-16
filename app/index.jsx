import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bootzie from '../assets/BootSmug.png'
import LinkButton from './LinkButton'

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={Bootzie} style={{ width: 100, height: 100}} />

      <Text style={styles.title}> Welcome to Our Introduction App</Text>
      <Text style={{marginTop: 10, marginBottom: 30, textAlign: 'center', width: '100%' }}>
        by Sylas and Isaiah
      </Text>

      <View style={styles.card}>
        <LinkButton href="/aboutApp">About our app</LinkButton>
        <LinkButton href="/goalsPage">Goals and Plans</LinkButton>
        <LinkButton href="/aboutIsaiah">About Isaiah</LinkButton>
        <LinkButton href="/aboutSylas">About Sylas</LinkButton>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(101, 151, 160)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})