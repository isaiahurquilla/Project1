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
