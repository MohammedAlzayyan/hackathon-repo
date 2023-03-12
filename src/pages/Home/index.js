import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
// import posts from '../../data/posts';

function Home() {
  const accessToken = localStorage.getItem('token')

  const navigate = useNavigate()

  if (!accessToken) {
    navigate('/sign-in')
  }
  const [myposts, setPosts] = useState([
    {
      name:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.',
      image: '/post-image.png',
    },
    {
      name:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.',
      image: '/post-image.png',
    },
    {
      name:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.',
      image: '/post-image.png',
    },
    {
      name:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.',
      image: '/post-image.png',
    },
    {
      name:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus facere amet quasi, corrupti voluptatibus adipisci vitae nemo inventore quam a, odio necessitatibus vero saepe.',
      image: '/post-image.png',
    },
  ])
  const searchHandler = (key) => {
    let filteredPosts = myposts.filter((post) => {
      return post.name.includes(key)
    })
    setPosts(filteredPosts)
  }
  return (
    <>
      <Header searchHandler={searchHandler} />
      <Posts posts={myposts} />
    </>
  )
}

export default Home
