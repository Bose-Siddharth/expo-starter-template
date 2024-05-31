import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const Experience = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.heading}>
        <Text style={styles.head}>Experience</Text>
        <Text style={styles.txt1}>Tell your knowledge about the language.</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: '80%' }}>
        <View style={{ height: "80%", backgroundColor: 'white' }}>
          <ExperienceCard
            title='Novice'
            title1='____________________'
            title2='Its okay to learn anytime!'
            image={require('../../assets/Grinning face with sweat.png')}
            cardStyle={styles.card1}
            titleStyle={styles.card1Title}
            subtitleStyle={styles.card1Subtitle}
          />
          <ExperienceCard
            title='Intermediate'
            title1='____________________'
            title2='You do know a little language!'
            cardStyle={styles.card2}
            titleStyle={styles.card2Title}
            subtitleStyle={styles.card2Subtitle}
            image={require('../../assets/Grinning face with smiling eyes.png')}
          />
          <ExperienceCard
            title='Conversational'
            title1='____________________'
            title2='Nice, You even know how to speak!'
            cardStyle={styles.card3}
            titleStyle={styles.card3Title}
            subtitleStyle={styles.card3Subtitle}
            image={require('../../assets/Disguised face.png')}
          />
        </View>
        <View style={{ height: "20%" }}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test')}>
            <Text style={styles.btntxt}>Let's Start!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#74B900',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 420,
  },
  head: {
    marginTop: '15%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: '1%'
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  txt1: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
  card1: {
    backgroundColor: '#E9F6FD',
    borderColor: '#009CE9',
    borderWidth: 2
  },
  card1Title: {
    color: '#009CE9',
    fontSize: 25,
    fontWeight: 'bold',
  },
  card1Subtitle: {
    color: '#009CE9',
    fontSize: 16,
    marginBottom: '8%'
  },
  card2: {
    backgroundColor: '#FFEEEE',
    borderColor: '#FE7A79',
    borderWidth: 2
  },
  card2Title: {
    color: '#FE7A79',
    fontSize: 25,
    fontWeight: 'bold'
  },
  card2Subtitle: {
    color: '#FE7A79',
    fontSize: 16,
    marginBottom: '7%'
  },
  card3: {
    backgroundColor: '#FBFEF5',
    borderColor: '#80CA04',
    borderWidth: 2
  },
  card3Title: {
    color: '#80CA04',
    fontSize: 25,
    fontWeight: 'bold',
  },
  card3Subtitle: {
    color: '#80CA04',
    fontSize: 16,
    marginBottom: '5%'
  },
  btn: {
    marginTop: '15%',
    marginLeft: "8%",
    width: 350,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B900',
    borderRadius: 25
  },
  btntxt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }
});
