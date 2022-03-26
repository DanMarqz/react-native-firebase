import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import db from '../database/firebase';
import { doc, getDoc } from "firebase/firestore";



const TaskDetailScreen = (props) => {
  
  const getTaskById = async id => {

    const task = doc(db, "tasks", "SF");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }

  }

  useEffect(() => {

  }, []);

  return (
    <View>
      <Text>User Detail Screen</Text>
    </View>
  )
}

export default TaskDetailScreen