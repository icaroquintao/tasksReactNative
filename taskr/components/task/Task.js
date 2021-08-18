import React, {useState} from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native'

export const Task = ({ description, complete, onToggle }) =>{

    const [isDirty, setIsDirty] = useState(false);

    const handleToggleComplete = () => {
        setIsDirty(true);
        onToggle();
    }
    return(
        <Pressable 
        style={[styles.container, isDirty && styles.dirty]}
        onPress={handleToggleComplete}
        >
            <Text style={[styles.text, complete && styles.completed]}>
                {description}
            </Text>
        </Pressable>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        padding: 26,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    }, 
    text: {
        color: 'white',
    },
    completed:{
        color: 'red',
        textDecorationLine: 'line-through',
        textDecorationColor: 'white',
        textDecorationStyle: 'double',
    },
    dirty:{
        backgroundColor: 'pink',
    }
});