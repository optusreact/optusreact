import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from "./src/screens/LoginScreen";
import Dashboard from "./src/screens/Dashboard";

const MainNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  Dashboard: {screen: Dashboard}
});

const App = createAppContainer(MainNavigator);

export default App;
 