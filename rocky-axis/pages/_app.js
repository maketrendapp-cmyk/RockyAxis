// pages/_app.js
import '../styles/globals.css';
import Header from '../components/rockyaxis/Header';
import Footer from '../components/rockyaxis/Footer'; // optional – if you want a global footer too

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* If you have a global footer, place it here */}
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;