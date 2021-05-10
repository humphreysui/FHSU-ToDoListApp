import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.delete}> </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#2c4547',
    padding: 15,
    borderRadius: 10,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 5,
  },
  itemText: {
    maxWidth: '80%',
    color:'#ffffff',
    paddingRight: 20,
  },
  delete: {
    width: 40,
    height: 20,
    backgroundColor: '#f7a053',
    borderRadius:20,
  },
});

export default Task;