import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/shop-context.jsx'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ShopContextProvider>
			<App />
		</ShopContextProvider>
	</BrowserRouter>
)
