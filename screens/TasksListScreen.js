import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import db from '../database/firebase';
import { collection, getDocs } from "firebase/firestore";
import { ListItem, Avatar } from '@react-native-elements/base/dist';
import { ListItemChevron } from '@react-native-elements/base/dist/ListItem/ListItem.Chevron';
import { ListItemTitle } from '@react-native-elements/base/dist/ListItem/ListItem.Title';
import { ListItemContent } from '@react-native-elements/base/dist/ListItem/ListItem.Content';
import { ListItemSubtitle } from '@react-native-elements/base/dist/ListItem/ListItem.Subtitle';


const TasksListScreen = (props) => {
  
  const [tasks, setTasks] = useState([]);

  useEffect( async () => {
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
  }, []);

  return (
    <ScrollView>
      <Button 
        title='Add Task' 
        onPress={() => props.navigation.navigate('CreateTaskScreen')}
      />

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
              <ListItemContent>
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

export default TasksListScreen