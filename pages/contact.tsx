import { SEO } from "@/components/layouts/seo";
import client from "apollo-client";
import { ContactUsQuery } from "graphql/contact-us";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { CustomPage } from "types/pages";

const Contact: CustomPage = () => {
  return (
    <>
      <h1>Contact page</h1>
    </>
  );
};

Contact.innerPage = true;

export default Contact;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<AboutUsProps>> => {
  const { data } = await client.query(ContactUsQuery);
  const { contactUsPage } = data;
  const seo = contactUsPage?.data?.attributes.seo;

  return {
    props: {
      seo: seo,
    },
  };
};

interface AboutUsProps {
  seo: SEO;
}
