import React from 'react';
import {View, Text, Button} from 'react-native';

const EnquiryList = ({navigation}) => (
  <View>
    <Text>Enquiry List</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detail')}
    />
  </View>
);

export default EnquiryList;
