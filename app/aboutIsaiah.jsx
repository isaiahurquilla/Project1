import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Isaiah from '../assets/Isaiah.jpg'
const index = () => {
  return (
    <View style={styles.container}>
      <Image source={Isaiah} style={{ width: 100, height: 100 }} />

      <Text style={styles.title}> About Isaiah</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>
        by Isaiah
      </Text >

      <View style={styles.card}>
        <Text>
          About Isaiah
        </Text>

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
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    boxShadow: ' 4px 6px rgba(0, 0, 0, 0.1)',
  }
})