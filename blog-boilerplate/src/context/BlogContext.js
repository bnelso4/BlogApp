import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';



const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload;
        case 'delete_blogpost':
            return state.filter(blogPost=>blogPost.id !==action.payload)

        
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
            })

        default:
            return state;
    }
};

const getBlogPost = dispatch => {
    return async() => {
       const response = await jsonServer.get('/blogposts');
        // response.data === [{blogpost},{},{}]

        dispatch({ type: 'get_blogpost', payload: response.data })
    };
}


const addBlogPost = (dispatch) => {
    return async function(title, content, callback){
        await jsonServer.post('/blogposts', { title, content });


        
        callback();
    }
}


const deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id })
    }


}


const editBlogPost = dispatch => {
    return async (id,title,content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title,content});

        dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
        callback();
    }
}




export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPost
    },
    []
)
