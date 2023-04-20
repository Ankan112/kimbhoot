import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
