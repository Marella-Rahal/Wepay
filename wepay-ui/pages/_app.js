import Head from "next/head";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from 'next-themes';

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>wepay</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Online Payment System"
        />
        <meta name="keywords" content="online-pay-payment-system-nextjs-reactjs-javascript-tailwind-mapboxgl" />
        <meta name="author" content="Marella Rahal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#161616"/>
        <link rel="icon" href="logo.svg" />
      </Head>

      {/* //todo for dark mode  */}
      <ThemeProvider attribute="class" enableSystem={false}>

        {/* //todo animation for the whole page */}
        <AnimatePresence mode="wait">

          <motion.div
            key={router.route}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>

      </ThemeProvider>

    </>
  );
}

export default MyApp;
