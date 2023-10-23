import { useEffect } from 'react';
import {Platform, View, Text, BackHandler} from 'react-native';

export default function QuitApp() {
    useEffect(() => {
      
        if(Platform.OS === 'ios') {
            exit(9);
        } else {
            BackHandler.exitApp();
        }
    },[])
  return (
    <View><Text></Text></View>
  );
}