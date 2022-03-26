import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import db from '../database/firebase';
import { collection, addDoc } from "firebase/firestore";

const CreateTaskScreen = (props) => {

  const [state, setState] = useState({
    taskName: '',
    taskDescription: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value })
  }

  const saveNewTask = async () => {
    if(state.taskName === ''){
      alert("You can't save a task without name");
    } else {
      try {
        const dataRef = await addDoc(collection( db , 'tasks' ), {
          taskName: state.taskName,
          taskDescription: state.taskDescription
        });
        alert(`${state.taskName} is saved!`)
        props.navigation.navigate('TasksListScreen')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Task name"
          onChangeText={(value) => handleChangeText("taskName", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Task description"
          onChangeText={(value) => handleChangeText("taskDescription", value)}
        />
      </View>
      <View>
        <Button 
          title="Save task" 
          onPress={() => saveNewTask()}
        >
        </Button>
      </View>
    </ScrollView>
  );
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

export default CreateTaskScreen