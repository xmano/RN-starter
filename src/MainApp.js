import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class MainApp extends Component {
  name = '01. Singh is King';
  heart = require('./img/plain-heart.png');

  state = {
    liked: false,
  };

  constructor(props) {
    super(props);

    this.onButtonPressed = this.onButtonPressed.bind(this);
  }


  onButtonPressed = () => {
    console.warn("Button Pressed.");
    this.setState({
      liked : !this.state.liked,
    });
  };

  render() {
    const likedStyles = (this.state.liked) ? styles.like : null;

    return ( 
      <View style={styles.container}>
        <View style={styles.innerContainer} />
        <Text style={styles.title}>
          <Text style={styles.subtitle}>Playing:</Text> {this.name}
        </Text>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#fefefe"
          onPress={this.onButtonPressed}>
          <Image source={this.heart} style={[styles.icon, likedStyles]}/>
        </TouchableHighlight>
      </View>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: '#e67e22',
    borderRadius: 5,
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'transparent',
    height: 50,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 12,
    left: 10,
  },
  subtitle: {
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  like: {
    tintColor: '#e74c3c',
  },
});

export default MainApp;