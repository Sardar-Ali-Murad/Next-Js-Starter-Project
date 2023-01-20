import "../styles/globals.css";
import Layout from "../components/Layout"
import {AppProvider}  from "../context/appContext"

function MyApp({ Component, pageProps }) {
  return (
     <AppProvider>
      <Layout>
        <Component {...pageProps} />
     </Layout>
    </AppProvider>
  );
}

export default MyApp;
