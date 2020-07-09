import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR} from "../../../utils/constants"
class TutorCard extends Component {
  getPostedDay(value) {
    var post = value;
    var monthComp = value.substring(0, value.indexOf('/'));
    if (Number(monthComp) > 12) {
      var dayComp = value.substring(
        value.indexOf('/') + 1,
        value.lastIndexOf('/'),
      );
      var yearComp = value.substring(value.lastIndexOf('/') + 1, value.length);
      post = `${dayComp}/${monthComp}/${yearComp}`;
    }
    var postedDay = new Date(post);
    var current = new Date();
    var diffTime = current.getTime() - postedDay.getTime();
    var diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
    if (Math.floor(diffDays / 365) > 0) {
      if(Math.floor(diffDays / 365) === 1)
      {
        return `${Math.floor(diffDays / 365)} year ago`;
      }
      else
      {
        return `${Math.floor(diffDays / 365)} years ago`;
      }
    }
    if (Math.floor(diffDays / 30) > 0) {
      return `${Math.floor(diffDays / 30)} months ago`;
    }
    if (diffDays <= 29) {
      return `${diffDays} days ago`;
    }
  }
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  render() {
    const {data, onClick} = this.props;

    // console.log('Data : ', data);
    this.getPostedDay(data.postedOn);
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
            <View
              style={{
                height: 35,
                width: 35,
                backgroundColor: COLOR[this.randomIntFromInterval(0,COLOR.length -1)],
                borderRadius: 18,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                {data.name ? data.name.charAt(0) : ''}
              </Text>
            </View>
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
            <Text style={{fontSize: 10}}>{this.getPostedDay(data.postedOn)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TutorCard;
