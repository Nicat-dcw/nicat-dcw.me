import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BottomBar from '../components/BottomBar'
import Head from 'next/head'
import store from '../store/pwa'
function MyApp({ Component, pageProps }: AppProps) {
    const MetaData = () => {
        return (
            <>
            <meta name="application-name" content={store.appName} />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content={store.appContent} />
<meta name="description" content={store.appContent} />
<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<meta name="msapplication-TileColor" content="#2B5797" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="theme-color" content="#121212" />

<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="manifest" href="/manifest.json" />
<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:url" content={store.appURL}/>
<meta name="twitter:title" content={store.appName} />
<meta name="twitter:description" content={store.appContent} />
<meta name="twitter:image" content="icons/android-chrome-192x192.png" />
<meta name="twitter:creator" content="@OnlyCheeini Github: @Nicat-dcw" />
<meta property="og:type" content="website" />
<meta property="og:title" content={store.appName} />
<meta property="og:description" content={store.appContent} />
<meta property="og:site_name" content={store.appName} />
<meta property="og:url" content={store.appURL} />
<meta property="og:image" content="/icons/apple-touch-icon.png" />

            </>
        )
    }
  return (
      <>
<MetaData/>      
<BottomBar/>          
<Component {...pageProps} />
      </>
)
}

export default MyApp
