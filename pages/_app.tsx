import Layout from "@/components/layouts";
import { useRouter } from "next/router";
import { GlobalStyles } from "twin.macro";
import "@/styles/common.scss";
import { MyAppProps } from "types/pages";
import { ScrollDirection } from "@/components/layouts/smoothScroll";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "createEmotionCache";
import { AnimatePresence } from "framer-motion";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const router = useRouter();
  return (
    <CacheProvider value={emotionCache}>
      <GlobalStyles />
      <Layout
        seo={pageProps.seo}
        direction={
          Component.innerPage
            ? ScrollDirection.vertical
            : ScrollDirection.horizontal
        }
      >
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </CacheProvider>
  );
}

export default MyApp;
