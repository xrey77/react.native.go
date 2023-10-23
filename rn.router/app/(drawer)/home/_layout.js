import { Tabs,Redirect } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Image,View, Text, TouchableOpacity,TouchableHighlight } from 'react-native';
// import { Stack } from 'expo-router';

export default function HomeLayout() {

  const signout = () => {
    return <Redirect href={"/(drawer)/home"} />
  }

  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>

      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="wechat" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="feed"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="feed" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{        
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={26} color={color} />
          ),
          title: "Settings",
        }}
      />

      <Tabs.Screen
        name="logout"
        options={{        
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={26} color={color} />
          ),
          title: "Home",
        }}
      />



      {/* HIDE TAB SCREEN */}
      <Tabs.Screen
        name="index"
        options={{        
          headerShown: false,
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />


    </Tabs>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  rounded: {
    width:30,
    height:30,
    backgroundColor: 'blue',
    borderRadius:50
  },
  aboutus: {
    height:30,
    width:30,
    backgroundColor: 'blue',
    borderRadius: 50
  },
  login: {
    height:30,
    width:30,
    backgroundColor: 'green',
    borderRadius: 50
  },
  register: {
    height:30,
    width:30,
    backgroundColor: 'purple',
    borderRadius: 50
  },
  textStyle: {
    marginTop: 5,
    color: 'black',
  },
  topTab: {
    position: 'absolute',
    top: -20,
    left: 150,
    height:30,
    width:30,
    backgroundColor: 'green',
    borderRadius: 50,
  }
});