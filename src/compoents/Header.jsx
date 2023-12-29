import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import myFirstReducer from '../redux/reducer';
import { geTodosFetch, getPostsFetch } from '../redux/action';

const todo =[
  {
    name: 'a',
    age: 2
  },
  {
    name: 'b',
    age: 3
  }
]

const Header = () => {
  const posts = useSelector((state)=> state.myFirstReducer.posts);
  const todos = useSelector((state)=> state.myFirstReducer.todos);
  console.log(posts, todos, 'oooooooooooooooo');
  const dispatch = useDispatch();

  return (
    <div>
      <div>
  <h1>
    Posts:
        
      </h1>
      <div>
      {posts && posts.map((post, index) => (
          <div key={index}>
            {post.title}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(getPostsFetch())}>Click for the Posts</button>
    </div>

      {/* <div>
        {
          todo.map((value)=>(
            <div>
              {value.name}
              {value.age}
            </div>
          ))
        }
      </div> */}


      {/* <div>
        <h1>todos: 
          {todos.map(todo => (
            <div>
              {todo.title}
            </div>
          ))}</h1>
        {todos}
        <button onClick={()=>dispatch(geTodosFetch())}>Click for the Todos</button>
      </div> */}
    </div>
  )
}

export default Header