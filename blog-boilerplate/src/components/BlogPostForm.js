import React, {useState} from 'react';
import { ScrollView, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);




    return <ScrollView style={ style.viewStyle}>
        <Text style={style.label} >Enter Title:</Text>
        <TextInput style={style.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={style.label}>Enter Content:</Text>
        <TextInput style={style.input} value={content} onChangeText={(text) => setContent(text)} />
        <Button title="Save Blog Post"
            color='#A8FFB9'
            onPress={() => { onSubmit(title,content)}}
        />
    </ScrollView>

}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }

}


const style = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        color:'white',
        borderColor: 'black',
        backgroundColor:'#3F3F3F',
        marginBottom: 30,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        color: 'white',
        alignSelf:'center'

    },
    viewStyle: {
        backgroundColor: '#1C1C1C',
        flex:1
    }
})

export default BlogPostForm 