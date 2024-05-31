import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';

const FlagCard = ({ image, title, navigation }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.6 : 1.0 },
      ]}
      onPress={() => navigation.navigate('Experience')}
    >
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default FlagCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '2%',
  },
  cardContainer: {
    width: 160,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    marginTop: '3%',
    position: 'relative',
    borderRadius:12
  },
  imageContainer: {
    width: '100%',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
});
