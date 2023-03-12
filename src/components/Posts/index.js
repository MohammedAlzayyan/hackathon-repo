import React, { useEffect, useState } from 'react'
import './index.css'
import Modal from '../../Modal'
import AddPost from '../AddPost'
import EditPost from '../EditPost'
import SharePost from '../SharePost'
import Post from '../Post'

function Posts() {
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [posts, setPosts] = useState([])
  const [postClicked, setPostClicked] = useState({})

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://hakathon2023.onrender.com/api/post/list?offset=10&limit=10',
        {
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      const data = await response.json()
      setPosts(data.data.posts)
    }
    fetchPosts()
  }, [posts])

  // console.log(postClicked)

  const deletePost = async (id) => {
    const res = await fetch(
      `https://hakathon2023.onrender.com/api/post/delete/${id}`,
      {
        method: 'DELETE',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    console.log(res)
  }

  return (
    <section className="posts">
      <div className="container">
        <div className="inline-flex">
          <h2>Latest Posts</h2>
          <img
            src="/add-icon.png"
            alt="ddd"
            onClick={() => setShowAdd(!showAdd)}
          />
          <Modal isOpened={showAdd}>
            <AddPost onClose={() => setShowAdd(false)} />
          </Modal>
        </div>

        {posts &&
          posts.map((post, index) => (
            <Post
              post={post}
              key={index}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              showShare={showShare}
              setShowShare={setShowShare}
              postClicked={post}
              setPostClicked={(i) => setPostClicked(i)}
              deletePost={deletePost}
            />
          ))}

        <Modal isOpened={showEdit}>
          <EditPost
            postClicked={postClicked}
            onClose={() => setShowEdit(false)}
          />
        </Modal>
        <Modal isOpened={showShare}>
          <SharePost onClose={() => setShowShare(false)} />
        </Modal>

        <div className="navigation">
          <div>
            <span>
              <label htmlFor="number">items per page</label>

              <select name="number">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>2</option>
              </select>
            </span>
            <span>1 - 10 of 16</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Posts
