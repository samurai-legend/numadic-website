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
