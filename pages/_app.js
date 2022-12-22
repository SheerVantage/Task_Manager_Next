import {Provider} from 'react-redux'
import Store from '../lib/Store'
import '../lib/utilities'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider store = {Store}><Component { ...pageProps } /></Provider>
}

export default MyApp
