import React from 'react';
import { View, Text, Button } from 'react-native';
import SubjectPage from './components/SubjectPage';
import { createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

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

const AppNavigator = createAnimatedSwitchNavigator(
  {
    Home: HomeScreen,
    Subjects: SubjectScreen,
  },
  {
    initialRouteName: 'Home',
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
