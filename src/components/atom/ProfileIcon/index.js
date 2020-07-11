import React from 'react';
import {View, Text} from 'react-native';

const ProfileIcon = ({data, color}) => {
  return (
    <View
      style={{
        height: 35,
        width: 35,
        backgroundColor: color,
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
