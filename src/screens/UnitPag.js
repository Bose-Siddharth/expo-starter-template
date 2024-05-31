import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const UnitPag = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>UnitPag</Text>
      <Button 
        title='Go next' 
        onPress={() => navigation.navigate('Module')} 
      />
    </View>
  );
}

export default UnitPag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  }
});
