import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return  <div className='bg-white-100 relative'>
    <Component {...pageProps} /></div>
}

export default MyApp
