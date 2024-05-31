import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';

const correctAnswer = ['I', 'am', 'not', 'able', 'to', 'go', 'outside'];

const TestPage5 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(40);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(Array(7).fill(null)); // Adjust the array size as per the number of blanks

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

  const handleAnswerPress = (answer) => {
    const index = selectedOptions.findIndex((option) => option === null);
    if (index !== -1) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[index] = answer;
      setSelectedOptions(newSelectedOptions);
    }
    setSelectedAnswer(answer);
    setIsCorrect(null);
  };

  const handleCheckPress = () => {
    const selectedSentence = selectedOptions.filter(option => option !== null);
    setIsCorrect(JSON.stringify(selectedSentence) === JSON.stringify(correctAnswer));
    
  };

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
            <Text style={styles.txt2}>Question 1</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
              <Image source={require('../../assets/dogi.png')} />
              <Pressable style={styles.press}>
                <View style={styles.pressBefore} />
                <Image source={require('../../assets/Group.png')} style={styles.img1} />
              </Pressable>
            </View>
            <View style={{marginTop:'9%', gap:30}}>
              <Text style={{ color: '#446C00', fontWeight: '900' }}>
                {selectedOptions.map((option, index) => (
                  option ? (index === selectedOptions.length - 1 ? option : option + ' ') : "______________"
                ))}
              </Text>
            </View>
            <View style={styles.ans}>
              <View style={styles.optionRow}>
                {['I', 'am', 'not', 'able'].map((word, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.press1,
                        selectedAnswer === word && {
                          backgroundColor: isCorrect === null ? '#F1F9E4' : isCorrect ? '#74B900' : '#FE7A79',
                          borderWidth: 4,
                          borderColor: selectedAnswer === word && isCorrect !== null ? isCorrect ? '#446C00' : '#fc5a58' : '#446C00',
                        },
                        isCorrect && correctAnswer.includes(word) && { backgroundColor: '#74B900' }, // Change color to green if option is part of correct sentence
                        !isCorrect && selectedOptions.includes(word) && { backgroundColor: '#FE7A79' }, // Change color to red if option is incorrect
                      ]}
                      onPress={() => handleAnswerPress(word)}
                      disabled={selectedOptions.includes(word)}
                    >
                      <Text
                        style={[
                          styles.questtext,
                          (selectedAnswer === word && isCorrect !== null) ? { color: 'white' } : {},
                        ]}
                      >
                        {word}
                      </Text>
                    </TouchableOpacity>
                ))}
              </View>
              <View style={styles.optionRow}>
                {['to', 'go', 'outside'].map((word, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.press1,
                        selectedAnswer === word && {
                          backgroundColor: isCorrect === null ? '#F1F9E4' : isCorrect ? '#74B900' : '#FE7A79',
                          borderWidth: 4,
                          borderColor: selectedAnswer === word && isCorrect !== null ? isCorrect ? '#446C00' : '#fc5a58' : '#446C00',
                        },
                        isCorrect && correctAnswer.includes(word) && { backgroundColor: '#74B900' }, // Change color to green if option is part of correct sentence
                        !isCorrect && selectedOptions.includes(word) && { backgroundColor: '#FE7A79' }, // Change color to red if option is incorrect
                      ]}
                      onPress={() => handleAnswerPress(word)}
                      disabled={selectedOptions.includes(word)}
                    >
                      <Text
                        style={[
                          styles.questtext,
                          (selectedAnswer === word && isCorrect !== null) ? { color: 'white' } : {},
                        ]}
                      >
                        {word}
                      </Text>
                    </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={{ marginTop: '12%' }}>
              <TouchableOpacity style={styles.btn2} onPress={handleCheckPress}>
                <Text style={styles.btntxt}>Check</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };

    export default TestPage5;

const styles = StyleSheet.create({
  imgcont: {
    flexDirection: 'row',
    marginTop: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressBefore: {
    position: 'absolute',
    bottom: -10,
    left: 10,
    width: 0,
    height: 10,
    borderTopWidth: 10,
    borderTopColor: '#F1F9E4',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
  },
  img: {
   
    width: 32,
    height: 32,
    marginTop: '5%',
  },
  imgtxt: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: '10%',
    color: '#74B900',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '7%',
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
    color: '#74B900',
    fontSize: 17,
    fontWeight: 'bold',
  },
  txt2: {
    fontWeight: '400',
    fontSize: 17,
    color: '#446C00',
  },
  questtext: {
    marginLeft: '10%',
    fontSize: 18,
    color: '#446C00',
  },
  press: {
    backgroundColor: '#F1F9E4',
    height: 70,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginRight: '15%',
  },
  press1: {
    backgroundColor: '#F1F9E4',
    height: 60,
    width: '25%', // Adjusted width to fit four words comfortably
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#446C00',
    marginTop: '5%',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: '1%', // Added margin to space out the options
  },
  ans: {
    marginTop: '10%',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btn2: {
    width: 320,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B900',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
  timer: {
    fontSize: 20,
    color: '#446C00',
    fontWeight: '800',
  },
  img1: {
    width: 49,
    height: 39,
    marginTop: '4%',
  },
  });
  

  