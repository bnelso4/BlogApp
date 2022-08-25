import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Context } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons'


const ShowScreen = ({navigation }) => {
    const {state} = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <ScrollView style={ styles.contentBody}>
        <Text style={styles.titleStyle}>{blogPost.title}</Text>
        <Text style = {styles.contentText}>{blogPost.content}</Text>
    </ScrollView>

}

ShowScreen.navigationOptions = ({navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => { navigation.navigate('Edit', {id: navigation.getParam('id')}) } }>
                <EvilIcons name='pencil' size={35} color='#A8FFB9'  />
                </TouchableOpacity>


            )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        alignSelf: 'center',
        color:'white',
        borderBottomWidth: 20,
        
    },
    contentText: {
        color: 'white',
        fontSize:20
    },
    contentBody: {
        backgroundColor: '#1C1C1C',
        flex:1
    }
    
});
export default ShowScreen;