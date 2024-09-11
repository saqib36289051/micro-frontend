import React, { Suspense } from 'react'
import './index.css'
import {Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteContainer from './components/container/RouteContainer'
import LoginPage from './pages/login/LoginPage'
import { useAppSelector } from 'redux_store/store'
import { Toaster } from 'react-hot-toast'
import GrievenceApp from 'grievence_desk/GrievenceApp'

// const RemoteProductList = React.lazy(() =>
//   import('grievence_desk/App').catch(error => console.error('Failed to load component', error))
// );



const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteContainer />,
    children: [
      // { path: "/", element:  },
      {
        path: "/grievence/*",
        element: <Suspense>
          <GrievenceApp />
        </Suspense>
      },
    ],
  },
]);

const App = () => {
  const { user } = useAppSelector((state) => state.setting)
  console.log("🚀 ~ App ~ isLoggedIn:", user)
  const isLoggedIn = user?.token


  return (
    <div className='m-auto'>
      <Toaster />
      <RouterProvider router={router} />
      {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
      {/* <Routes>
        {
          isLoggedIn
            ? <Route path="/*" element={<RouteContainer />} />
            : <Route path="/*" element={<LoginPage />} />
        }
      </Routes> */}
    </div>
  )
}


export default App