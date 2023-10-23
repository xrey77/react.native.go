import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function ProductLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>

      <Tabs.Screen
        name="list"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="catalog"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="archive" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="logout"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
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