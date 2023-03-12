import './style.css'

export const Dropdown = ({
  showEdit,
  openDropdown,
  setShowEdit = (f) => f,
  setOpenDropdown = (f) => f,
}) => {
  return (
    <div className="dropdown">
      <ul className="list">
        <li onClick={() => setShowEdit(!showEdit)}>Edit</li>
        <li>Delete</li>
      </ul>
    </div>
  )
}

export default Dropdown
