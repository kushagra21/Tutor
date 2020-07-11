import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';
// import TutorCard from '../../components/organism/TutorCard';
import {connect} from 'react-redux';
import {getPostedDay, randomIntFromInterval} from '../../utils/commonUtils';
import ProfileIcon from '../../components/atom/ProfileIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR_ARRAY, COLORS} from '../../utils/constants';

class EnquiryDetails extends Component {
  callNumber(phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`);
  }
  render() {
    const {data} = this.props;
    var selectedColor =
      COLOR_ARRAY[randomIntFromInterval(0, COLOR_ARRAY.length - 1)];
    if (data !== undefined) {
      return (
        <View
          style={{
            backgroundColor: COLORS.background,
            height: '96%',
            width: '95%',
            marginTop: 10,
            marginRight: 10,
            marginBottom: 10,
            marginLeft: 10,
            padding: 20,
            flex: 1,
            flexDirection: 'column',
          }}>
          <View style={{minHeight: 140}}>
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
                <Text
                  style={{fontSize: 16, fontWeight: '700', paddingBottom: 5}}>
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
                <Text style={{fontSize: 10}}>
                  {getPostedDay(data.postedOn)}
                </Text>
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
          </View>
          <View style={{marginLeft: '10%'}}>
            <View style={{paddingLeft: 15, flex: 1, flexDirection: 'row'}}>
              <View style={{width: '40%'}}>
                <Text>Id</Text>
                <Text>Enquiry Status</Text>
                <Text>Found from Ad</Text>
                <Text>Exclusive</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text>: {data.enqId}</Text>
                <Text>: {data.enquiryStatus}</Text>
                <Text>: {data.fromAd ? 'Yes' : 'No'}</Text>
                <Text>: {data.isExclusive ? 'Yes' : 'No'}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: COLORS.background,
            height: '96%',
            width: '95%',
            marginTop: 10,
            marginRight: 10,
            marginBottom: 10,
            marginLeft: 10,
            padding: 20,
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text>Issue with selected Tutor</Text>
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.selectedTutor,
  };
}

export default connect(mapStateToProps)(EnquiryDetails);
