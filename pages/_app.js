import '../styles/styles.scss'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../redux-src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)))

function App({ Component, pageProps }) {
  return( 
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App