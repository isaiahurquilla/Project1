import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Isaiah from '../assets/Isaiah.jpg'
import { Link } from 'expo-router'

const aboutIsaiah = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Image source={Isaiah} style={{ width: 100, height: 100 }} />

        <Text style={styles.title}> About Isaiah</Text>
        <Text style={{marginTop: 10, marginBottom: 30}}>
        Hello everyone! My name is Isaiah, and I am one of the creators of this app.
        I was born in December 2001, in Montebello. 
        I am an undergraduate student at CSUB, majoring in Computer Science.
        I have a personal interest in programming and music making, but the second one is just a hobby.
        I am striving towards becoming a software engineer, but I am also open to exploring other career paths in the tech industry.
        I am learning that there is so much encapsulated within the field of computer science, and I am trying to  find my own path within it.
        Currently, I have found that I do have an interest in software development, and engineering, but I am currently learning about AI, IoT, more on application development. 
        I learned that I am not a fan of cybersecurity as much, however, I plan on getting security certifications in the future, as I do want to have a good understanding of it, and I know that it is an important aspect of the tech industry.
        What ended up sparking my interest in Computer Science was my father in law who tried getting my into CyberSecurity, and I even had that as my major in community college for a while.
        However, I found that I was very interested in programming but not so interested in the hardware aspect of I.T. That's when I changed my major to Computer Science and my interest in this field has only grown ever since.
        </Text >
        <Link href="/" style={styles.linkButton}> Back to Home Page</Link>
      </View>
    </ScrollView>
  )
}

export default aboutIsaiah

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    boxShadow: ' 4px 6px rgba(0, 0, 0, 0.1)',
  }
})