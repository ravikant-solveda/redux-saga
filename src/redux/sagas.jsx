import { call, put , takeEvery} from 'redux-saga/effects'

import {GET_USERS_FETCH, GET_USERS_SUCCESS, GET_TODOS_FETCH, GET_POSTS_FETCH, GET_TODOS_SUCCESS, GET_POSTS_SUCCESS} from './action';

async function usersFetch(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

async function postsFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

async function todosFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
}

function* workGetUsersFetch() {                      // generator function
    const users = yield call(usersFetch);            // it will wait to complete this line first and only then will move to next line.
    yield put({type: GET_USERS_SUCCESS, users })     // put are use to dispatch the action to redux store
}

function* workGetPostsFetch() {
    const posts = yield call(postsFetch);
    yield put({ type: GET_POSTS_SUCCESS, posts });
}

function* workGetTodosFetch() {
    const todos = yield call(todosFetch);
    yield put({ type: GET_TODOS_SUCCESS, todos });
}

function* mySaga(){
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch); 
    yield takeEvery(GET_TODOS_FETCH, workGetTodosFetch); 
}

export default mySaga;