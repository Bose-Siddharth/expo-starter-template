import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

const ExperienceCard = ({ title, title1, title2, cardStyle, titleStyle, subtitleStyle, image }) => {
  const [borderWidth, setBorderWidth] = useState(1);

  return (
    <Pressable
      onPress={() => setBorderWidth(prev => (prev === 1 ? 3 : 1))} // Toggle border width on press
      style={[
        styles.cardContainer,
        cardStyle,
        { borderWidth: borderWidth }
      ]}
    >
      <View style={styles.titleImageContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text style={[styles.subtitle, subtitleStyle]}>{title1}</Text>
          <Text style={[styles.subtitle, subtitleStyle]}>{title2}</Text>
        </View>
        <Image source={image} style={styles.image} />
      </View>
    </Pressable>
  );
}

export default ExperienceCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#0a3302',
    shadowOffset: { width: 3, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 18,
    elevation: 5,
    marginTop: '8%',
    padding: 15,
    alignSelf: 'center',
    height: 150, // Set a fixed height for all cards
    borderColor: '#74B900', // Border color to match the theme
  },
  titleImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10, // Add some padding to the right to ensure text doesn't overlap with the image
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'left',
    fontWeight: '400'
  },
});
