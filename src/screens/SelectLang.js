import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import FlagCard from '../components/FlagCard';
import { ScrollView } from 'react-native-gesture-handler';

const SelectLang = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#fffff2' }}>
      <View style={styles.heading}>
        <Text style={styles.txt}>Welcome!</Text>
        <Text style={styles.txt1}>Select a language to learn.</Text>
      </View>
      <View style={{ backgroundColor: '#fffff2', height: "80%" }}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search..."
            placeholderTextColor="#74B900"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <FlagCard image={require('../../assets/spain.jpg')} title='Spanish' navigation={navigation} />
          <FlagCard image={require('../../assets/france.jpg')} title='French' navigation={navigation} />
          <FlagCard image={require('../../assets/japan.jpg')} title='Japanese' navigation={navigation} />
          <FlagCard image={require('../../assets/german.jpg')} title='German' navigation={navigation} />
          <FlagCard image={require('../../assets/portugal.jpg')} title='Portuguese' navigation={navigation} />
          <FlagCard image={require('../../assets/russia.jpg')} title='Russian' navigation={navigation} />
          <FlagCard image={require('../../assets/korea.jpg')} title='Korean' navigation={navigation} />
          <FlagCard image={require('../../assets/china.jpg')} title='Chinese' navigation={navigation} />
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectLang;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: "100%"
  },
  heading: {
    backgroundColor: '#74B900',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  txt1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    marginTop: '2%',
    height: 45,
    borderColor: '#74B900',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#FBFEF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    margin: "5%",
    height: "9%",
  }
});
