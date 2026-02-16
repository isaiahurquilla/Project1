import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
<<<<<<< HEAD
import { Link, link } from 'expo-router'
=======
import LinkButton from './LinkButton'
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a

const images = [
  { src: require('../assets/BootzieBed.png'), caption: "Sylas's dog Bootzie" },
  { src: require('../assets/Comet.png'), caption: 'A comet spotted by Sylas on Oct 15th, 2024' },
  { src: require('../assets/TuxCat.png'), caption: 'If Sylas had a cat, it would be a Texedo Cat' },
  //Just replace the image paths below with your own pics, then change the caption to whatever you want. 
<<<<<<< HEAD
  { src: require('../assets/icon.png'), caption: 'Icon' },
  { src: require('../assets/adaptive-icon.png'), caption: 'Adaptive' },
  { src: require('../assets/favicon.png'), caption: 'Favicon' },
=======
  { src: require('../assets/NightCloud.jpg'), caption: 'Interesting cloud formation I saw at night' },
  { src: require('../assets/StudentsVsCollege.jpg'), caption: 'Loading screen of the "College vs Students" game' },
  { src: require('../assets/CrayonFight.jpg'), caption: 'Comically Large Crayon Fight' },
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
]

const Gallery = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gallery</Text>

      <View style={styles.grid}>
        {images.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Image source={item.src} style={styles.image} resizeMode="cover" />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        ))}
      </View>
<<<<<<< HEAD
        <Link href="/" style={styles.linkButton}>Back to Home Page</Link>
=======
        <LinkButton href="/" style={styles.linkButton}>Back to Home Page</LinkButton>
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
    </ScrollView>
  )
}

export default Gallery

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 16,
    backgroundColor: '#b8b8b8ff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 18,
    textAlign: 'center',
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: 375,
    height: 250,
  },
  caption: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    textAlign: 'center',
    width: '100%'
  },
<<<<<<< HEAD
  linkButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    boxShadow: ' 4px 6px rgba(0, 0, 0, 0.1)',
  }
=======
>>>>>>> 0cd26bae055ca4f3caa64f31726b251ec0cd513a
})