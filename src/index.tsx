import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import SimpleReactLightbox from 'simple-react-lightbox'
import App from './App'
import store from './app/store'
import './index.css'
import * as serviceWorker from './serviceWorkerRegistration'
// import reportWebVitals from 'performance/reportWebVitals'

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <SimpleReactLightbox>
               <App />
            </SimpleReactLightbox>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
