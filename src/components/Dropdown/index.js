import { useEffect } from 'react'
import './style.css'

export const Dropdown = ({
  showEdit,
  openDropdown,
  setShowEdit = (f) => f,
  setOpenDropdown = (f) => f,
  postClicked,
  setPostClicked = (f) => f,
  deletePost,
}) => {
  //   console.log(postClicked)
  useEffect(() => {
    if (postClicked) {
      setPostClicked(postClicked)
    }
  })
  return (
    <div className="dropdown">
      <ul className="list">
        <li onClick={() => setShowEdit(!showEdit)}>Edit</li>
        <li onClick={() => deletePost(postClicked._id)}>Delete</li>
      </ul>
    </div>
  )
}

export default Dropdown
