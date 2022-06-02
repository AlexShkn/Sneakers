import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Routes } from 'react-router-dom'
import './scss/index.scss'
import 'macro-css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Routes>
		<App />
	</Routes>,
)
