import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useExample } from './src/hooks/useExample';
import { API_URL, APP_NAME } from './src/constants';

const MainComponent = () => {
  const { currentTheme } = useTheme();
  const { value, incrementValue, decrementValue } = useExample();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.colors.background },
      ]}
    >
      <Text style={[styles.text, { color: currentTheme.colors.text }]}>
        Welcome to {APP_NAME}
      </Text>
      <Text style={[styles.text, { color: currentTheme.colors.text }]}>
        API URL: {API_URL}
      </Text>
      <Text style={[styles.text, { color: currentTheme.colors.text }]}>
        Counter: {value}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={incrementValue}
          color={currentTheme.colors.primary}
        />
        <Button
          title="Decrement"
          onPress={decrementValue}
          color={currentTheme.colors.accent}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
