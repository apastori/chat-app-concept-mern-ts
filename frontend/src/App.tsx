import './App.css'
import { Login } from './pages/login/Login'
import { SignUp } from './pages/signup/SignUp'
import { Home } from './pages/home/Home'

function App() {
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <SignUp />
        {/* <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
        </Routes>
        <Toaster /> */}
      </div>
    </>
  )
}

export { App }
