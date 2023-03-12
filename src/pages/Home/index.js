import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
// import posts from '../../data/posts';

function Home() {
  const accessToken = localStorage.getItem('token')

  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [count, setCount] = useState(0)
  const fetchPosts = async (
    startingIndex = 0,
    numsOfPosts = 10,
    regex = '',
  ) => {
    let response = null
    if (!regex) {
      response = await fetch(
        `https://hakathon2023.onrender.com/api/post/list?offset=${startingIndex}&limit=${numsOfPosts}}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
    } else {
      response = await fetch(
        `https://hakathon2023.onrender.com/api/post/list?offset=${startingIndex}&limit=${numsOfPosts}}&regex=${regex}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
    }

    const data = await response.json()
    setPosts(data.data.posts)
    setCount(data.data.count)
  }

  return (
    <>
      <Header fetchPosts={fetchPosts} />
      <Posts
        posts={posts}
        setPosts={(data) => {
          setPosts(data)
        }}
        fetchPosts={fetchPosts}
        count={count}
      />
    </>
  )
}

export default Home
