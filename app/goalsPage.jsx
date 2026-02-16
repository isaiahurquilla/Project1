import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

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
                    
                    
                        <Text style={styles.goalTitle}>Improving coordination with a team</Text>
                        <Text style={styles.goalText}>The handful of times I've worked on a team have been enjoyable but I want to improve my effectiveness in a team by improving my corrdination with team members.{"\n\n"}</Text>
                    
                    
                   
                        <Text style={styles.goalTitle}>Making a personal project</Text>
                        <Text style={styles.goalText}>I want to make a personal project that I can be proud of and that showcases my skills in programming, Even if I don't make a finished project, I'd like to have made some progress on it{"\n\n"}</Text>
                  
                    
                    
                        <Text style={styles.goalTitle}>Improving skills in coding languages</Text>
                        <Text style={styles.goalText}>I want to improve my skills in programming languages such as JavaScript, and C++ as I feel there is room for improvement. I've also got my sights on learning other coding languages like LUA.{"\n\n"}</Text>
                    
                
                <Link href="/" style={styles.linkButton}>Back to Home Page</Link>
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
        padding: 15,
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
        overflow: 'hidden',
    },
})