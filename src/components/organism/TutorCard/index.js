import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {getPostedDay, randomIntFromInterval} from '../../../utils/commonUtils';
import ProfileIcon from '../../atom/ProfileIcon/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR_ARRAY, COLORS} from '../../../utils/constants';

class TutorCard extends Component {
  callNumber(phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`);
  }
  render() {
    const {data, onClick} = this.props;
    var selectedColor =
      COLOR_ARRAY[randomIntFromInterval(0, COLOR_ARRAY.length - 1)];
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
              backgroundColor: COLORS.background,
              alignItems: 'center',
            }}>
            <ProfileIcon
              color={selectedColor}
              data={data.name ? data.name.charAt(0) : ''}
            />
          </View>
          <View
            style={{
              width: '70%',
              minHeight: 110,
              backgroundColor: COLORS.background,
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
              backgroundColor: COLORS.background,
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Text style={{fontSize: 10}}>{getPostedDay(data.postedOn)}</Text>
            <Icon
              name="mobile-phone"
              size={50}
              color={data.phoneNumber ? selectedColor : COLORS.disabled}
              onPress={() => {
                this.callNumber(data.phoneNumber);
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TutorCard;
