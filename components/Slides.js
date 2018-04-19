import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Animated } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Slides extends Component {
  state = { currentPage: 1};
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }
  renderDots() {
    return this.props.data.map((slide, index) => {
      return (
        <Animated.View 
          key={index}
          style={styles.dotStyle} 
        />      
      );
    });
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }
  updatePage = (event) => {
    let newPage = parseInt(event.nativeEvent.contentOffset.x/SCREEN_WIDTH+1);
    
    if(newPage !== this.state.currentPage) {
      this.setState({ currentPage: newPage });
    }
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={this.updatePage}
        showsHorizontalScrollIndicator={true}
        endFillColor='#009688'
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  textStyle: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 15
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  },
  pageIndicator: {

  },
  dotsContainerStyle: {
    flexDirection: 'row',
    marginTop: 50
  },
  dotStyle: {
    height: 10,
    width: 10,
    backgroundColor: '#595959',
    margin: 8,
    borderRadius: 5
  }
};

export default Slides;