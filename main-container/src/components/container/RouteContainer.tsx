import React, { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
const AddGrievance = lazy(() => import('grievence_desk/addGrievence'))
const Grievence = lazy(() => import('grievence_desk/grievenceDesk'))


const RouteContainer = () => {
    const location = useLocation()
    React.useEffect(() => {
    }, [location]);
    return (
        <div className='flex'>
            <div className='w-1/5 h-screen bg-white border-r'>
                <Sidebar />
            </div>
            {/*  width: calc(100% - 300px); */}
            <div className='m-6 overflow-auto min-h-screen w-[calc(100%-300px)]'>
                <Routes>
                    <Route path="/grievence/*">
                        <Route path="" element={<Grievence />} />
                        <Route path="add" element={<AddGrievance />} />
                    </Route>
                </Routes>
            </div>
        </div>

    )
}

export default RouteContainer