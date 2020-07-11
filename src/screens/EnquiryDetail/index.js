import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../utils/constants';
import TutorCard from '../../components/organism/TutorCard';

class EnquiryDetails extends Component {
  constructor(props) {
    super(props);
    console.log('TutorData : ', props.route.params.tutorData);
    this.state = {
      data: props.route.params.tutorData,
    };
  }

  render() {
    const {data} = this.state;
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
          <TutorCard
            data={data}
            onClick={() => {
              null;
            }}
          />
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
  }
}

export default EnquiryDetails;
