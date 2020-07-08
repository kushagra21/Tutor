import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EnquiryList from './screens/EnquiryList/index';
import EnquiryDetail from './screens/EnquiryDetail/index';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Enquiries" component={EnquiryList} />
        <Stack.Screen name="Detail" component={EnquiryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
