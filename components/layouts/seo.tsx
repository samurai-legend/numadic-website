import Head from "next/head";
import { FunctionComponent, useEffect, useState } from "react";
import { NextSeo } from "next-seo";

const Seo: FunctionComponent<SEO> = ({
  metaTitle,
  metaImage,
  metaDescription,
  metaSocial,
  metaRobots,
  structuredData,
  metaViewport,
  canonicalURL,
  keywords,
}) => {

  return (
    <NextSeo
      titleTemplate="Numadic | %s"
      title={metaTitle}
      description={metaDescription}
      canonical={canonicalURL}
      openGraph={{
        url: canonicalURL,
        title: metaTitle,
        description: metaDescription,
        images: [
          {
            url: metaImage?.data?.attributes.url
              ? metaImage?.data?.attributes.url
              : "",
          },
        ],
        site_name: "Numadic",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;

export interface SEO {
  metaTitle: string;
  metaImage: Image;
  metaDescription: string;
  metaSocial: MetaSocial[];
  metaRobots: string;
  structuredData: string;
  metaViewport: string;
  canonicalURL: string;
  keywords: string;
}

export interface Image {
  data: Data | null;
}

export interface Data {
  attributes: Attributes;
}

export interface Attributes {
  url: string;
  alternativeText: string;
}

export interface MetaSocial {
  description: string;
  socialNetwork: string;
  title: string;
  image: Image;
}
