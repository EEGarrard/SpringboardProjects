import { useState } from 'react'
import PostsList from './features/posts/PostsList'
import './App.css'
import AddPostForm from './features/posts/AddPostForm'

function App() {


  return (
   <main className='App'>
<PostsList/>
<AddPostForm/>
   </main>
  )
}

export default App
