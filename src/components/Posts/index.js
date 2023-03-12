import React, { useEffect, useState } from 'react'
import './index.css'
import Modal from '../../Modal'
import AddPost from '../AddPost'
import EditPost from '../EditPost'
import SharePost from '../SharePost'
import Post from '../Post'
import { useNavigate } from 'react-router-dom'

function Posts({ posts, fetchPosts, count, setPosts }) {
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [postClicked, setPostClicked] = useState({})
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    fetchPosts()
  }, [])

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
    navigate(0)

    console.log(res)
  }

  return (
    <section className="posts">
      <div className="container">
        <div className="inline-flex">
          <h2>Latest Posts</h2>
          {token && (
            <img
              src="/add-icon.png"
              alt="ddd"
              onClick={() => setShowAdd(!showAdd)}
            />
          )}

          <Modal isOpened={showAdd}>
            <AddPost
              onClose={() => setShowAdd(false)}
              setPosts={setPosts}
              posts={posts}
            />
          </Modal>
        </div>

        {token ? (
          posts &&
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
          ))
        ) : (
          <h2>please login to see posts</h2>
        )}
        {posts.length === 0 && <h2>loading</h2>}

        <Modal isOpened={showEdit}>
          <EditPost
            postClicked={postClicked}
            onClose={() => setShowEdit(false)}
          />
        </Modal>
        <Modal isOpened={showShare}>
          <SharePost
            postClicked={postClicked}
            onClose={() => setShowShare(false)}
          />
        </Modal>
        {token && posts.length ? (
          <div className="navigation">
            <div>
              <span>
                <label htmlFor="number">items per page</label>

                <select
                  onChange={(e) => {
                    fetchPosts(0, e.target.value)
                  }}
                  name="number"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </span>
              <span>
                1 - {posts.length} of {count}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Posts
