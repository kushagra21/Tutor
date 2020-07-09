import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class TutorCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onClick();
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              width: '10%',
              height: 100,
              backgroundColor: 'powderblue',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 35,
                width: 35,
                backgroundColor: '#339966',
                borderRadius: 18,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>A</Text>
            </View>
          </View>
          <View
            style={{
              width: '70%',
              height: 100,
              backgroundColor: 'skyblue',
              flex: 1,
              flexDirection: 'column',
              paddingTop: 10,
              paddingLeft: 15,
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', paddingBottom: 5}}>
              Anoushka Goswami
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500'}}>
              Talent Acquisition Specialist
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500'}}>Indiranagar</Text>
            <Text style={{fontSize: 12, fontWeight: '500'}}>At Home</Text>
          </View>
          <View
            style={{
              width: '20%',
              height: 100,
              backgroundColor: 'steelblue',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Text style={{fontSize: 10}}>16 Hours ago</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TutorCard;
