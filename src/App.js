import React from 'react';
import { View, Text, Button } from 'react-native';
import SubjectPage from './components/SubjectPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="OPA" onPress={() => navigation.navigate('Subjects')} />
    </View>
  );
};

const SubjectScreen = () => {
  return <SubjectPage></SubjectPage>;
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Subjects: SubjectScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
