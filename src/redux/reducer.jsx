import { GET_USERS_SUCCESS , GET_POSTS_SUCCESS, GET_TODOS_SUCCESS} from "./action";


const initialState = {
    users: [],
    posts:[],
    todos: []
}

const myFirstReducer = (state = initialState, action)=>{
    switch(action.type) {
        case GET_USERS_SUCCESS:
            return {...state, users: action.users };
        case GET_POSTS_SUCCESS:
            return {...state, posts: action.posts };
        case GET_TODOS_SUCCESS:
            return {...state, todos: action.todos };
        default:
            return state;
    }
}
export default myFirstReducer;