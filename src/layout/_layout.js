// src/screens/_layout.js
import { View, StyleSheet } from 'react-native';
import React from 'react';

const _layout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default _layout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "8%", // Add horizontal padding
    paddingVertical: "2%", // Add vertical padding
   flex:1,
    backgroundColor: 'white',
  },
});
