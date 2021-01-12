import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import 'styles/main.scss'
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }) => {
  return(
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default App;
