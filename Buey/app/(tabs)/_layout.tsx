import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#3dff98',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'add-outline' : 'add-sharp'} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen
                    name="map"
                    options={{
                        title: 'Map',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'compass-sharp' : 'compass-outline'} color={color} size={24}/>
                        ),
                    }}
            />
        </Tabs>
    );
}
