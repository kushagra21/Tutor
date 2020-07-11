import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getPostedDay} from '../../../utils/commonUtils';
import ProfileIcon from '../../atom/ProfileIcon/index';
class TutorCard extends Component {
  render() {
    const {data, onClick} = this.props;

    // console.log('Data : ', data);
    return (
      <TouchableOpacity
        onPress={() => {
          onClick();
        }}
        style={{marginTop: 2, marginBottom: 2}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              width: '10%',
              minHeight: 110,
              backgroundColor: '#ffffff',
              alignItems: 'center',
            }}>
            <ProfileIcon data={data.name ? data.name.charAt(0) : ''} />
          </View>
          <View
            style={{
              width: '70%',
              minHeight: 110,
              backgroundColor: '#ffffff',
              flex: 1,
              flexDirection: 'column',
              paddingTop: 10,
              paddingLeft: 15,
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', paddingBottom: 5}}>
              {data.name}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500'}}>
              {data.categoryName}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500'}}>
              {data.location}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500'}}>
              {data.classLocPref}
            </Text>
          </View>
          <View
            style={{
              width: '20%',
              minHeight: 110,
              backgroundColor: '#ffffff',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Text style={{fontSize: 10}}>{getPostedDay(data.postedOn)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TutorCard;
