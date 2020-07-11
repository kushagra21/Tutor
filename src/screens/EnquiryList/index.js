import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import TutorCard from '../../components/organism/TutorCard';
class EnquiryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalData: [],
      selectedTutor: {},
    };
  }
  componentDidMount() {
    this.getDataFromNetwork();
  }

  getDataFromNetwork() {
    fetch('http://www.mocky.io/v2/5c41920e0f0000543fe7b889')
      .then(response => response.json())
      .then(data => {
        if (data.dataList && data.dataList.length > 0) {
          this.setState({totalData: data.dataList});
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderTutorCard(data, index) {
    const {navigation} = this.props;
    return (
      <TutorCard
        key={index}
        data={data}
        onClick={() => {
          navigation.navigate('Detail', {tutorData: data});
        }}
      />
    );
  }
  render() {
    const {totalData} = this.state;
    return (
      <View>
        <FlatList
          key={totalData.length}
          keyExtractor={(item, index) => index.toString()}
          data={totalData}
          renderItem={({item, index}) => this.renderTutorCard(item, index)}
        />
      </View>
    );
  }
}

export default EnquiryList;
