import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

export default function AppLayout() {
  const focusedColor = "#0DD196"
  return (
    <Tabs>
      <Tabs.Screen
        name="activity"
        options={{
          tabBarLabel: "Atividades",
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Feather name="activity" size={size} color={focused ? focusedColor : color} />;
          },
          tabBarActiveTintColor: focusedColor
        }}
      />
      <Tabs.Screen
        name="createActivity"
        options={{
          tabBarLabel: "Criar",
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Feather name="plus-circle" size={size} color={focused ? focusedColor : color} />;
          },
          tabBarActiveTintColor: focusedColor
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarLabel: "Perfil",
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return <Feather name="smile" size={size} color={focused ? focusedColor : color} />;
          },
          tabBarActiveTintColor: focusedColor
        }}
      />
    </Tabs>
  );
}