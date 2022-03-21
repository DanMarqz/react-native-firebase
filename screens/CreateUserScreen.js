import React from 'react';
import { View, Button, TextInput, ScrollView, Stylesheet } from 'react-native';


const CreateUserScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Username' />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Email User' />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Phone User' />
      </View>
      <View>
        <Button title='Save User'></Button>
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

export default CreateUserScreen