# React Native Expo Project

This project is a structured React Native Expo application with integrations for Redux/Redux Toolkit, Theming, Context, Custom Hooks, Constants, Assets management, and Code Quality tools.

## Folder Structure

```plaintext
root/
│
├── assets/
│   └── images/
│   └── fonts/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   │   └── index.js
│   ├── hooks/
│   │   └── useExample.js
│   ├── navigation/
│   ├── redux/
│   │   ├── slices/
│   │   │   └── exampleSlice.js
│   │   └── store.js
│   ├── screens/
│   ├── theme/
│   │   └── theme.js
│   └── context/
│       └── ThemeContext.js
│
├── App.js
├── babel.config.js
├── .eslintrc.js
├── .prettierrc
└── package.json
```


## Key Files and Their Roles

- **assets/**: Contains images, fonts, and other static assets.
- **src/api/**: Manages API calls (currently empty, can be populated as needed).
- **src/components/**: Contains reusable components (currently empty, can be populated as needed).
- **src/constants/**: Stores constant values used throughout the app.
- **src/hooks/**: Custom hooks for encapsulating reusable logic.
- **src/navigation/**: Manages navigation logic (currently empty, can be populated as needed).
- **src/redux/**: Contains Redux setup including slices and store.
- **src/screens/**: Contains screen components (currently empty, can be populated as needed).
- **src/theme/**: Defines theming properties.
- **src/context/**: Provides context for theming.
- **App.js**: The main entry point of the app that integrates all the setups.

## Detailed Explanation

### Redux Integration

- **Provider**: The `Provider` component from `react-redux` wraps the entire app to provide access to the Redux store.
- **store**: The Redux store is imported from `src/redux/store`.

### Theming

- **ThemeProvider**: The `ThemeProvider` component provides the theme context to the app.
- **useTheme Hook**: The `useTheme` custom hook accesses the current theme from the `ThemeContext`.

### Custom Hooks

- **useExample Hook**: The `useExample` custom hook manages the counter value using Redux. It uses `useSelector` to access the state and `useDispatch` to dispatch actions (increment and decrement).

### Constants

- **API_URL and APP_NAME**: Constants imported from `src/constants` are used within the `MainComponent` to display static information.

### Styling

- **Styles**: The `StyleSheet.create` method is used to define styles, which are dynamically adjusted based on the current theme colors.

### Components

- **MainComponent**: This component demonstrates the use of Redux for state management, theming for consistent styling, and constants for static information.

## Example Component Integration

```javascript
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
    <View style={[styles.container, { backgroundColor: currentTheme.colors.background }]}>
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
        <Button title="Increment" onPress={incrementValue} color={currentTheme.colors.primary} />
        <Button title="Decrement" onPress={decrementValue} color={currentTheme.colors.accent} />
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