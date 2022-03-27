import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, Alert } from 'react-native';
import db from '../database/firebase';
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";



const TaskDetailScreen = (props) => {
  
  const [task, setTask] = useState({
    id: '',
    taskName: '',
    taskDescription: ''
  })

  const [loading, setLoading] = useState(true);

  const getTaskById = async (id) => {
    const task = doc(db, "tasks", id);
    const docSnap = await getDoc(task);
    const taskData = docSnap.data();

    setTask({
      ...taskData,
      id: docSnap.id
    });
    setLoading(false);
  }

  useEffect(() => {
    getTaskById(props.route.params.taskId);
  }, []);

  const handleChangeText = (name, value) => {
    setTask({ ...task, [name]: value })
  }

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    Alert.alert(`'${task.taskName}' deleted!`);
    props.navigation.navigate('TasksListScreen')
  }

  const updateTask = async (id) => {
    await updateDoc(doc(db, "tasks", id), {
      taskName: task.taskName,
      taskDescription: task.taskDescription
    });
    Alert.alert(`'${task.taskName}' updated!`);
    props.navigation.navigate('TasksListScreen');
  }

  const openConfirmationModal = () => {
    Alert.alert(`'${task.taskName}' will be deleted`, 'Are you sure?', [
      {text: 'Yes', onPress: () => deleteTask(task.id)}, 
      {text: 'No', onPress: () => console.log('Cancel Pressed')} 
    ])
  }

  if(loading){
    return(
      <View>
        <ActivityIndicator size='large' color='#3EB489' />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          value={task.taskName}
          placeholder="Task name"
          onChangeText={(value) => handleChangeText("taskName", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          value={task.taskDescription}
          placeholder="Task description"
          onChangeText={(value) => handleChangeText("taskDescription", value)}
        />
      </View>
      <View>
        <Button 
          color='#00B6B3'
          title="Update task" 
          onPress={() => updateTask(task.id)}
        >
        </Button>
      </View>
      <View>
        <Button 
          color='#A7A450'
          title="Delete task" 
          onPress={() => openConfirmationModal()}
        >
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  }
});

export default TaskDetailScreen