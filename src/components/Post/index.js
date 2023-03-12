import '../Posts/index.css'
import Dropdown from '../Dropdown'
import { useState } from 'react'

import Modal from '../../Modal'
import EditPost from '../EditPost'
import SharePost from '../SharePost'

export const Post = ({
  post,
  showEdit,
  setShowEdit = (f) => f,
  showShare,
  setShowShare = (f) => f,
  postClicked,
  setPostClicked = (f) => f,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className="post" onClick={() => setPostClicked(post)}>
      {!post.image ? (
        <img src="/share.png" alt="" className="imagePost" />
      ) : (
        <img src={post.image} alt="i" className="imagePost" />
      )}
      <p>{post.text}</p>

      <img
        onClick={() => setOpenDropdown((prev) => !prev)}
        src="/three-dots.png"
        alt="three-dots"
        style={{ cursor: 'pointer', width: '30px' }}
      />
      {openDropdown && (
        <Dropdown
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      )}
      <div className="share">
        <img
          src="/share.png"
          alt=""
          style={{ cursor: 'pointer', width: '30px' }}
          onClick={() => setShowShare(!showShare)}
        />
      </div>
    </div>
  )
}

export default Post
