import { useRouter } from "next/router";
import { GlobalStyles } from "twin.macro";
import "@/styles/common.scss";
import { MyAppProps } from "types/pages";
import { ScrollDirection } from "@/components/layouts/smoothScroll";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "createEmotionCache";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/layouts"));
const StarBackgroundBlock = dynamic(
  () => import("@/components/blocks/starBackgroundBlock")
);

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
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

export default MyApp;
