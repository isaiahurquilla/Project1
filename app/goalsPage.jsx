import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import LinkButton from './LinkButton'

const GoalsPage = () => {
    return (
        <ScrollView style={{ backgroundColor: "#ede6ff" }} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Learning Goals</Text>
                    <Text style={styles.subTitle}>Isaiah's Goals</Text>
                    
                    
                        <Text style={styles.goalTitle}>Master Linux</Text>
                        <Text style={styles.goalText}>Build proficiency in Linux so that I can make apps more effectively without constantly searching up keyterms.{"\n\n"}</Text>
                    
                    
                    
                        <Text style={styles.goalTitle}>Improve Design Ability</Text>
                        <Text style={styles.goalText}>Learn how to visually design interfaces that are functional and aesthetically pleasing, without compromising one another.{"\n\n"}</Text>
                    
                    
                    
                        <Text style={styles.goalTitle}></Text>
                        <Text style={styles.goalText}>{"\n\n"}</Text>
                    
                

                
                    <Text style={styles.subTitle}>Sylas's Goals</Text>
                    
                    
                        <Text style={styles.goalTitle}></Text>
                        <Text style={styles.goalText}></Text>
                    
                    
                   
                        <Text style={styles.goalTitle}></Text>
                        <Text style={styles.goalText}></Text>
                  
                    
                    
                        <Text style={styles.goalTitle}></Text>
                        <Text style={styles.goalText}></Text>
                    
                
                <LinkButton href="/">Back to Home Page</LinkButton>
            </View>
        </ScrollView>
    )
}

export default GoalsPage

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
    subTitle: {
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    goalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    goalText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'normal', //Adjusted so text wouldn't be bold
    },
    linkButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    color: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  }
})