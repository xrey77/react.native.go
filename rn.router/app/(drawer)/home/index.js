import * as React from 'react';
import { StyleSheet, ImageBackground,View,Image, Text, TouchableOpacity,TouchableHighlight } from 'react-native';
import { Redirect } from "expo-router";

export default function Home(props) {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../../assets/bg.png')} style={styles.image}>
            {/* <View style={styles.main}> */}
                {/* <Text style={styles.title}>WELCOME</Text> */}
            {/* </View> */}
          </ImageBackground>
        </View>
    );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    // width: '100%',
    // height: '100%',
    // resizeMode: 'cover',    
  },  
});
