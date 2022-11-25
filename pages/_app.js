import {ChakraProvider} from "@chakra-ui/react"
import {AnimatePresence} from "framer-motion"
import Layout from "../components/Layout";
import theme from "../lib/theme";

function MyApp({ Component, pageProps, router }) {

  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp
