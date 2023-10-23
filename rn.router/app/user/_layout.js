import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
// import { Stack } from 'expo-router';

export default function UserLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="file-o" size={24} color={color} />
          ),
          title: "Profile",
        }}
      />

       <Tabs.Screen
        name="otp"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="qrcode" size={24} color={{color: 'blue'}} />
          ),
          title: "One Time Password",
        }}
      />

      <Tabs.Screen
        name="index"
        options={{                  
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="lock" size={26} color={color} />
          ),
          title: "Auth",
        }}
      />


      {/* <Tabs.Screen
        name="/(drawer/home)}"
        options={{                  
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={26} color={color} />
          ),
          title: "Home",
        }}
      /> */}


   </Tabs>
  );
  return <Tabs/>
};