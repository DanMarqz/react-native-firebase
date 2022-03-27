import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import TasksListScreen from './screens/TasksListScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='TasksListScreen' 
        component={TasksListScreen} 
        options={{title: 'Tasks List'}} 
      />
      <Stack.Screen 
        name='CreateTaskScreen' 
        component={CreateTaskScreen} 
        options={{title: 'Create a new task'}} 
      />
      <Stack.Screen 
        name='TaskDetailScreen' 
        component={TaskDetailScreen} 
        options={{title: 'Details'}} 
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
