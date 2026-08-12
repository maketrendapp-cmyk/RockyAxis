// pages/_app.js
import '../styles/globals.css';
import Header from '../components/rockyaxis/Header';
import Footer from '../components/rockyaxis/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;