import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="teladeinicio"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="home" size={size} color={color} />;
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name="md-settings-outline" size={size} color={color} />;
          }
        }}
      />
    </Tabs>
  );
}