import React, { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
const App = lazy(() => import('grievence_desk/App'))


const RouteContainer = () => {
    const location = useLocation()
    React.useEffect(() => {
    }, [location]);
    return (
        <div className='flex'>
            <div className='w-1/5 h-screen bg-white border-r'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Routes>
                    <Route path="/grievence/*">
                        <Route path="" element={<App />} />
                    </Route>
                </Routes>
            </div>
        </div>

    )
}

export default RouteContainer