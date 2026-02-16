//This file is used to create a reusable LinkButton component that can be used throughout the app to navigate between different pages. 
// It takes in two props: href, which is the destination URL, and children, which is the text that will be displayed on the button. 
// The component uses the Link component from expo-router to handle navigation and applies some styling to make it look like a button.
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const LinkButton = ({ href, children }) => {
  return <Link href={href} style={styles.linkButton}>{children}</Link>
}

export default LinkButton

const styles = StyleSheet.create({
  linkButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    color: '#fff',
    alignSelf: 'center', // Adjusted to cut down size of the button to fit the text instead of stretching across the screen
  }
})
