import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import User from './pages/User';

const AuthRoute = createStackNavigator(
  {
    Main,
    User,
  },
  {
    headerLayoutPreset: 'center' /* Alinhar o texto ao centro */,
    headerBackTitleVisible: false /* Mostrar só a flecha de voltar */,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor:
        '#FFF' /* prencher todos os lugares que precisam de cor  */,
    },
  }
);

const Routes = createAppContainer(AuthRoute);

export default Routes;
