import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

         
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My Todos</Text>
          <View style={styles.items}>
            
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

      </ScrollView>

      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <View>
          <TextInput style={styles.input} placeholder={'Add a Todo here'} value={task} onChangeText={text => setTask(text)} />
          <View>
            <TextInput style={styles.reminder} placeholder={'Reminder'}    />
             
          </View>
        </View>
        

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
     
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
     
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#f7a053",
    borderRadius: 20,
    padding:10
  },
  input: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#2c4547',
    borderRadius: 20,
    color: "#ffffff", 
    width: 250,
  },
  
  reminder: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#2c4547',
    borderRadius: 20,
    color: "#ffffff",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 100,
    backgroundColor: '#2c4547',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#ffffff"

  },
  addText: {},
});