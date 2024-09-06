import React from 'react'
import App from './App';
import store from 'main_container/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')


const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)