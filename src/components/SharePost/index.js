import React, { useEffect, useState } from 'react'

import './style.css'
import Card from '../CardPopUp'
import { useNavigate } from 'react-router-dom'

export const SharePost = ({
  onClose,
  postClicked,
  setPostClicked = (f) => f,
}) => {
  console.log(postClicked)
  const [sharePost, setSharePost] = useState({ email: '', permission: '' })
  const navigate = useNavigate()

  useEffect(() => {
    if (postClicked) {
      setPostClicked(postClicked)
    }
  })

  const handleInput = (e) => {
    setSharePost({
      ...sharePost,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      email: sharePost.email,
      permission: sharePost.access,
    }
    console.log(formData)

    console.log(postClicked)

    const response = await fetch(
      `https://hakathon2023.onrender.com/api/post/share/${postClicked._id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      },
    )
    navigate(0)
    onClose()
    console.log(response)
  }
  return (
    <div>
      <Card>
        <h2>Share Post</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              style={{
                width: '100%',
                height: '50px',
                fontSize: '18px',
                border: '1px solid #d8d8d8',
                borderRadius: '6px;',
              }}
              name="email"
              value={sharePost.email}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <p>General access</p>
            <ul style={{ listStyle: 'none' }}>
              <li>
                <input
                  type="radio"
                  id="viewedonly"
                  name="access"
                  value="read"
                  onChange={handleInput}
                />
                <label for="viewedonly">Viewed only</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="viewedonlyandedit"
                  name="access"
                  value="write"
                  onChange={handleInput}
                />
                <label for="viewedonlyandedit">Viewed only and edit</label>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-share">
              Share
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default SharePost
