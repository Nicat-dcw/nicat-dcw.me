import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BottomBar from '../components/BottomBar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
<BottomBar/>          
<Component {...pageProps} />
      </>
)
}

export default MyApp
