import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/header/Layout'
import '../styles/homecss/categories.module.css'
import '../styles/homecss/footer.module.css'
import '../styles/marketcss/market.module.css'
import '../styles/marketcss/ListProducts.module.css'
import '../styles/marketcss/sale.module.css'
import { Provider } from 'react-redux'
import store from './components/store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Provider store={store}>

      <Component {...pageProps} />

      </Provider>
    </Layout>
  )
}

export default MyApp
