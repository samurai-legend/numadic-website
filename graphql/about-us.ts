import { gql } from "@apollo/client";
import {
  seo,
} from "./fragments";

export const AboutUsQuery = {
  query: gql`
    query AboutUsPage {
    aboutUsPage {
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
