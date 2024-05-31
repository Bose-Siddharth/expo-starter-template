import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';

const TestPage3 = () => {
  const [timer, setTimer] = useState(40);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItemLeft, setSelectedItemLeft] = useState(null);
  const [selectedCategoryRight, setSelectedCategoryRight] = useState(null);
  const [matches, setMatches] = useState({});
  const [checkClicked, setCheckClicked] = useState(false); // State to track if "Check" button is clicked

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const items = ['Milk', 'Apple', 'Carrot', 'Chicken'];
  const categories = ['Dairy', 'Fruit', 'Vegetable', 'Meat'];

  const handleItemSelectLeft = (item) => {
    setSelectedItemLeft(item);
  };

  const handleCategorySelectRight = (category) => {
    setSelectedCategoryRight(category);
    if (selectedItemLeft) {
      setMatches(prevMatches => ({
        ...prevMatches,
        [selectedItemLeft]: category
      }));
      setSelectedItemLeft(null);
    }
  };

  const handleCheck = () => {
    setCheckClicked(true);
  };

  const isPairMatched = useMemo(() => {
    return matches[selectedItemLeft] === selectedCategoryRight;
  }, [selectedItemLeft, selectedCategoryRight, matches]);

  const disablePair = (item, category) => {
    return matches[item] === category || matches[category] === item;
  };

  const TimerModal = useMemo(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.timer}>Live Restores in:</Text>
              <Text style={styles.timerText}>{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }, [isModalVisible, timer]);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Pressable onPress={toggleModal}>
          <View style={styles.imgcont}>
            <Image source={require('../../assets/bone.png')} style={styles.img} />
            <Text style={styles.imgtxt}>5</Text>
          </View>
        </Pressable>
        {TimerModal}
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn}>
            <Text style={styles.btntxt}>Unit 1</Text>
          </Pressable>
          <Pressable style={styles.btn1}>
            <Text style={styles.btntxt1}>Chapter 1</Text>
          </Pressable>
        </View>
        <Text style={styles.txt2}>Question 3</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%' }}>
          <Text style={styles.questtext}>Match The Following</Text>
        </View>
        <View style={styles.matchContainer}>
          <View style={styles.column}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.press1,
                  selectedItemLeft === item && styles.selectedOption,
                  (checkClicked && isPairMatched && matches[item] === selectedCategoryRight && selectedItemLeft === item) && styles.matchedOptionLeft, // Apply green background only if the selected pair matches the correct pair
                  disablePair(item, categories[0]) && styles.disabledPair, // Disable pair if already matched
                ]}
                onPress={() => handleItemSelectLeft(item)}
                disabled={disablePair(item, categories[0])} // Disable TouchableOpacity if pair is already matched
              >
                <Text style={styles.questtext1}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.column}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.press1,
                  selectedCategoryRight === category && styles.selectedOption,
                  (checkClicked && isPairMatched && matches[selectedItemLeft] === category && selectedCategoryRight === category) && styles.matchedOptionRight, // Apply green background only if the selected pair matches the correct pair
                  disablePair(items[0], category) && styles.disabledPair, // Disable pair if already matched
                ]}
                onPress={() => handleCategorySelectRight(category)}
                disabled={disablePair(items[0], category)} // Disable TouchableOpacity if pair is already matched
              >
                <Text style={styles.questtext1}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.btn2Container}>
          <TouchableOpacity style={styles.btn2} onPress={handleCheck}>
            <Text style={styles.btntxt}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TestPage3;

const styles = StyleSheet.create({
  imgcont: {
    flexDirection: 'row',
    marginTop: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 32,
    height: 32,
    marginTop: '5%',
  },
  imgtxt: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: '9%',
    color: '#74B900',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '7%',
    marginLeft: '5%'
  },
  btn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B900',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  btntxt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  btn1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#74B900',
    borderRadius: 25,
    marginBottom: '10%',
    borderWidth: 2,
  },
  btntxt1: {
    color: '#446C00',
    fontSize: 17,
    fontWeight: 'bold',
  },
  txt2: {
    fontWeight: '400',
    fontSize: 17,
    color: '#446C00',
    marginLeft: '5%'
  },
  questtext: {
    fontWeight: '500',
    fontSize: 18,
    color: '#446C00',
    marginLeft: '3%',
  },
  questtext1: {
    fontWeight: '500',
    fontSize: 18,
    color: '#446C00',
    marginLeft: '5%',
  },
  press1: {
    backgroundColor: '#F1F9E4',
    height: 60,
    width: '90%', // Adjust width to fit in the column
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    borderRadius: 10,
    borderColor: '#446C00',
    marginTop: '5%',
    borderWidth: 1,
    alignSelf: 'center',
  },
  selectedOption: {
    borderWidth: 3, // Increase border width when selected
  },
  matchedOptionLeft: {
    backgroundColor: '#74B900', // Green background color for correct left pair
  },
  matchedOptionRight: {
    backgroundColor: '#74B900', // Green background color for correct right pair
  },
  disabledPair: {
    opacity: 0.5, // Reduce opacity for disabled pairs
  },
  matchContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%', // Add padding to ensure space between columns
  },
  column: {
    flex: 1,
    alignItems: 'center', // Center items horizontally in the column
  },
  btn2Container: {
    marginTop: '10%', // Adjust the marginTop to align with other elements
    alignItems: 'center', // Align the button horizontally
  },
  btn2: {
    width: 320,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B900',
    borderRadius: 5,
    marginTop: '7%'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add a semi-transparent background
  },
  modalContent: {
    backgroundColor: '#EDF6DE',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#446C00',
  },
  timer:{
    fontSize:20,
    color: '#446C00',
    fontWeight:'800'
  }
});



