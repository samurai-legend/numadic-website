import { gql } from "@apollo/client";
import {
  seo,
} from "./fragments";

export const ContactUsQuery = {
  query: gql`
    query ContactUsPage {
    contactUsPage {
        data {
          attributes {
            seo{
              ...Seo
            }
          }
        }
      }
    }
    ${seo}
  `,
};
