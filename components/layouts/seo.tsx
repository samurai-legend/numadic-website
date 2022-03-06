import Head from "next/head";
import { FunctionComponent } from "react";

const Seo: FunctionComponent<SeoProps> = ({
  title,
  description,
  keyword,
  url,
  image,
}) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      {/* <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      /> */}
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />

      <title>{`Numadic | ${title}`}</title>
      <meta name="og:type" content="website" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta name="og:url" content={url} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
    </Head>
  );
};

export default Seo;

export interface SeoProps {
  title: string;
  description?: string;
  keyword?: string;
  url?: string;
  image?: string;
}
