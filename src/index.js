import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EnquiryList from './screens/EnquiryList/index';
import EnquiryDetail from './screens/EnquiryDetail/index';
import {Provider} from 'react-redux';
import ConfigureStore from './store/createStore';

const Stack = createStackNavigator();
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Enquiries" component={EnquiryList} />
          <Stack.Screen name="Detail" component={EnquiryDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
