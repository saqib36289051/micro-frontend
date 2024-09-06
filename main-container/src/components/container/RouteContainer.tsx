import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const App = lazy(() => import('grievence_desk/App'))


const RouteContainer = () => {
    return (
        <Routes>
            <Route path="/grievence/*">
                <Route path="" element={<App />} />
            </Route>
        </Routes>

    )
}

export default RouteContainer