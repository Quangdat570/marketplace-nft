import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/header/Layout'
import '../styles/homecss/categories.module.css'
import '../styles/homecss/footer.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
