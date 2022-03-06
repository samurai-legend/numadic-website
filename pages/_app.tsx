import Layout from "@/components/layouts";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { GlobalStyles } from "twin.macro";
import "@/styles/common.scss";
import { MyAppProps } from "types/pages";
import { ScrollDirection } from "@/components/layouts/smoothScroll";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  return (
    <>
      <GlobalStyles />
      <Layout
        seo={pageProps.seo}
        direction={
          Component.innerPage
            ? ScrollDirection.vertical
            : ScrollDirection.horizontal
        }
      >
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}

export default MyApp;
