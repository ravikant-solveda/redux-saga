export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_TODOS_FETCH = 'GET_TODOS_FETCH';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_POSTS_FETCH = 'GET_POSTS_FETCH';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';


export const getUsersFetch = () =>({
    type: GET_USERS_FETCH
})

export const geTodosFetch = () =>({
    type: GET_TODOS_FETCH
})

export const getPostsFetch = () =>({
    type: GET_POSTS_FETCH
})

