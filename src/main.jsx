// import {store} from './redux/app/store.js'
import { Provider } from 'react-redux'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <Provider store={store}>
      <App />
    // </Provider>
)
