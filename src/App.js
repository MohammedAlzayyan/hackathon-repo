import { Route, Routes } from 'react-router-dom'
import './login.css'
import Home from './pages/Home'
import SignIn from './SignIn'
import SignUp from './signUp'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
