import React from 'react';
import {COLOR_ARRAY} from '../../../utils/constants';
import {randomIntFromInterval} from '../../../utils/commonUtils';
import {View, Text} from 'react-native';

const ProfileIcon = ({data}) => {
  return (
    <View
      style={{
        height: 35,
        width: 35,
        backgroundColor:
          COLOR_ARRAY[randomIntFromInterval(0, COLOR_ARRAY.length - 1)],
        borderRadius: 18,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: '700'}}>{data}</Text>
    </View>
  );
};

export default ProfileIcon;
