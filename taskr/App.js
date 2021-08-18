import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Task } from './components/task/Task';

//Simula uma dado vindo do banco como JSON
const INITIAL_TASKS = [
    {id: 1, description:'Descrição da tarefa 01', complete: false},
    {id: 2, description:'Descrição da tarefa 02', complete: true},
    {id: 3, description:'Descrição da tarefa 3', complete: false},
    {id: 4, description:'Descrição da tarefa 4', complete: true},
    {id: 5, description:'Descrição da tarefa 5', complete: false},
    {id: 6, description:'Descrição da tarefa 6', complete: false},
];

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleOnToggle = (index) =>{
    //const task = tasks[index];

    const newTask = [
      ...tasks.slice(0,index),
      {...tasks[index], complete: !tasks[index].complete},
      ...tasks.slice(index+1),
    ];

    setTasks(newTask);
  };
  return (
    <View style={styles.container}>
      <Text>Primeiro titulo Icaro Exposs! {'\n'} </Text>
      <Button onPress={() => setTasks([])} title="Limpar Tarefas"/>
      <Text> {'\n'} </Text>
      <Button onPress={() => setTasks(INITIAL_TASKS)} title="Voltar Tarefas"/>
      <Text> {'\n'} </Text>
      {tasks.map((task,index) => 
      <Task 
        description={task.description} 
        complete={task.complete} 
        onToggle={() => handleOnToggle(index)} 
      />)}


      <StatusBar style="auto" />
    </View>
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
