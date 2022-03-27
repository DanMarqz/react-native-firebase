import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, Button, View,RefreshControl } from 'react-native';
import db from '../database/firebase';
import { collection, getDocs } from "firebase/firestore";
import { ListItem, Avatar } from '@react-native-elements/base/dist';
import { ListItemChevron } from '@react-native-elements/base/dist/ListItem/ListItem.Chevron';
import { ListItemTitle } from '@react-native-elements/base/dist/ListItem/ListItem.Title';
import { ListItemContent } from '@react-native-elements/base/dist/ListItem/ListItem.Content';
import { ListItemSubtitle } from '@react-native-elements/base/dist/ListItem/ListItem.Subtitle';

const TasksListScreen = (props) => {
  
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = [];
    
    querySnapshot.forEach((doc) => {
      const { taskName, taskDescription } = doc.data()
      tasks.push({
        id: doc.id,
        taskName,
        taskDescription
      })
    });
    setTasks(tasks)
  }

  useEffect( () => {
    getData();
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getData();
  }, []);

  setTimeout(getData, 4000)

  return (
    <ScrollView 
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.container}>
        <Button 
          
          color='#3EB489'
          title='Add Task' 
          onPress={() => props.navigation.navigate('CreateTaskScreen')}
        />
      </View>

      {
        tasks.map( task => {
          return (
            <ListItem 
              key={task.id} 
              bottomDivider 
              onPress={ () => {
                props.navigation.navigate('TaskDetailScreen', {
                  taskId : task.id
                })
              }}
            >
              <ListItemChevron />
              <Avatar 
                source={{uri: 'http://placekitten.com/g/128/128'}} 
                rounded
              />
              <ListItemContent >
                <ListItemTitle>{task.taskName}</ListItemTitle>
                <ListItemSubtitle>{task.taskDescription}</ListItemSubtitle>
              </ListItemContent>
            </ListItem>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  }
});

export default TasksListScreen