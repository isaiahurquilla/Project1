import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const IsaiahSP = () => {
    return (
        <ScrollView style={{ backgroundColor: "#ADD8E6" }} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Skills and Projects</Text>

                <Text style={styles.regularText}>
                    Some skills I have would include Java, Python, javscript, I am currently learning how to use React Native.{"\n\n"}
                    Some of my project ideas include building a personal website to show off some of my apps, building some kind of useful app which I haven't decided on yet, and making simple a video game.{"\n\n"}
                </Text>

                <Link href="/" style={styles.linkButton}>Back to Home Page</Link>
            </View>
        </ScrollView>
    )
}

export default IsaiahSP

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginVertical: 15,
    },
    linkButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
        elevation: 3,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    regularText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10, 
    marginBottom: 10
  },
})