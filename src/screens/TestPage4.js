import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';

const TestPage4 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(40);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const correctAnswer = 'Watermelon';

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

  const handleAnswerPress = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(null);
  };

  const handleCheckPress = () => {
    if (selectedAnswer) {
      setIsCorrect(selectedAnswer === correctAnswer);
    }
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
        <View style={styles.questionContainer}>
          <Image source={require('../../assets/Group.png')} style={styles.img1} />
          <Text style={styles.questtext}>Watermelon</Text>
        </View>
        <View style={styles.ans}>
          {[
            { name: 'Watermelon', image: require('../../assets/Watermelon.png') },
            { name: 'Grapes', image: require('../../assets/grapes.png') },
            { name: 'Guava', image: require('../../assets/guava.png') },
            { name: 'Apple', image: require('../../assets/orange.png') },
          ].map((option) => (
            <TouchableOpacity
              key={option.name}
              style={[
                styles.press1,
                selectedAnswer === option.name && {
                  backgroundColor: isCorrect === null ? '#F1F9E4' : isCorrect ? '#74B900' : '#FE7A79',
                  borderWidth: 4,
                  borderColor: selectedAnswer === option.name && isCorrect === false ? '#fc5a58' : '#446C00',
                },
                isCorrect === false && option.name === correctAnswer && { backgroundColor: '#74B900' },
              ]}
              onPress={() => handleAnswerPress(option.name)}
            >
              <View style={styles.btncontent}>
                <Image source={option.image} />
                <Text
                  style={[
                    styles.questtext1,
                    (selectedAnswer === option.name && isCorrect !== null) || (isCorrect === false && option.name === correctAnswer) ? { color: 'white' } : {},
                  ]}
                >
                  {option.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.checkButtonContainer}>
          <TouchableOpacity style={styles.btn2} onPress={handleCheckPress}>
            <Text style={styles.btntxt}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TestPage4;

const styles = StyleSheet.create({
  imgcont: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 32,
    height: 32,
    marginTop: '4%',
  },
  img1: {
    width: 49,
    height: 39,
    marginTop: '4%',
  },
  imgtxt: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: '5%',
    color: '#74B900',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    marginLeft: '5%',
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
    marginLeft: '5%',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5%',
    gap: 50,
  },
  questtext: {
    fontWeight: '500',
    fontSize: 18,
    color: '#446C00',
    marginTop: '4%',
    marginLeft: '2%', // Ensure the text is properly aligned
  },
  questtext1: {
    fontWeight: '500',
    fontSize: 18,
    color: '#446C00',
    marginRight: '5%',
  },
  press1: {
    backgroundColor: '#F1F9E4',
    height: '39%',
    width: '40%', // Adjust width to fit two items per row
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
    marginHorizontal: '5%', // Add margin for spacing between items
  },
  ans: {
    marginTop: '3%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ensure space between items
  },
  checkButtonContainer: {
    marginTop: '5%', // Adjust the margin as needed
    alignItems: 'center',
  },
  btn2: {
    width: 320,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74B900',
    borderRadius: 5,
  },
  btncontent: {
    justifyContent: 'center',
    alignItems: 'center',
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
  timer:{
    fontSize: 20,
    color: '#446C00',
    fontWeight: '800',
  }
});
