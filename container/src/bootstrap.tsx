import React from 'react'
import App from "./App"
import ReactDOM from 'react-dom/client'
import StoreProvider from 'redux_store/storeProvider'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
)