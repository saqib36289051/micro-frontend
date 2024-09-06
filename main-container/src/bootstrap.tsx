import React from 'react'
import App from "./App"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)