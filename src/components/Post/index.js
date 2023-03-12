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
  deletePost,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  //   console.log(postClicked)
  return (
    <div className="post">
      {!post.image ? (
        <div className="imagePost">
          <img src="/share.png" alt="" style={{ width: '50px' }} />
        </div>
      ) : (
        <img src={post.image} alt="i" className="imagePost" />
      )}
      <p>{post.text}</p>

      <img
        onClick={() => setOpenDropdown((prev) => !prev)}
        src="/three-dots.png"
        alt="three-dots"
        style={{
          cursor: 'pointer',

          position: 'absolute',
          right: '10px',
          top: '15px',
        }}
      />
      {openDropdown && (
        <Dropdown
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          postClicked={postClicked}
          setPostClicked={setPostClicked}
          deletePost={deletePost}
        />
      )}
      <div className="share" onClick={() => setPostClicked(postClicked)}>
        <img
          src="/share.png"
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={() => setShowShare(!showShare)}
        />
      </div>
    </div>
  )
}

export default Post
