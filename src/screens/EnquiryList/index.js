import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import TutorCard from '../../components/organism/TutorCard';
import {connect} from 'react-redux';
import {DISPATCH_ACTION} from '../../utils/constants';

class EnquiryList extends Component {
  componentDidMount() {
    this.getDataFromNetwork();
  }

  getDataFromNetwork() {
    fetch('http://www.mocky.io/v2/5c41920e0f0000543fe7b889')
      .then(response => response.json())
      .then(data => {
        if (data.dataList && data.dataList.length > 0) {
          this.props.populateData(data.dataList);
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
          this.props.selectTutor(data);
          navigation.navigate('Detail');
        }}
      />
    );
  }
  render() {
    const {totalData} = this.props;
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

function mapStateToProps(state) {
  return {
    totalData: state.totalTutors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateData: data =>
      dispatch({type: DISPATCH_ACTION.POPULATE_DATA, data: data}),
    selectTutor: data =>
      dispatch({type: DISPATCH_ACTION.SELECT_TUTOR, data: data}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnquiryList);
