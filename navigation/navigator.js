import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home screen" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "HOME",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            paddingBottom: 5,
            color: "#1f4d29",
          },
          headerStyle: {
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            shadowColor: "transparent",
          },
          title: "HOME",
          tabBarStyle: {
            paddingTop: 5,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: "SETTINGS",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            paddingBottom: 5,
            color: "#1f4d29",
          },
          headerStyle: {
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            shadowColor: "transparent",
          },
          title: "SETTINGS",
          tabBarStyle: {
            paddingTop: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
}
