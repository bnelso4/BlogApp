import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity  } from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = function ({navigation}) {
    const {state,  deleteBlogPost, getBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPost();

       const listener= navigation.addListener('didFocus', () => {
            getBlogPost();
        })
        return () => {
            listener.remove()
        }

    },[])

    return <View style={styles.largeView }>
        
        
        <FlatList
            
            data={state}
           keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>

                        <View style={styles.viewStyle}>
                        
                        <Text style={styles.title}>{item.title}</Text>

                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
            }}
        ></FlatList>
        </View>
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () =>
        (
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                <Feather name='plus' size={30} style={{ color:'#A8FFB9'} } />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'black',
        backgroundColor: '#1C1C1C'
        
    },
    title: {
        fontSize: 18,
        color:'white'

    },
    icon: {
        fontSize: 24,
        color:'white'
    },
    largeView: {
        backgroundColor: 'black',
        flex:1
    }

});

export default IndexScreen; 

