import { gql } from "@apollo/client";
import { Address, HeadingTitle, OtherLinks, seo, SocialMedia } from "./fragments";

export const AboutUsQuery = {
  query: gql`
    query AboutUsPage {
      aboutUsPage {
        data {
          attributes {
            seo {
              ...Seo
            }
            sections {
              ... on ComponentSectionsFooter {
                heading {
                  ...HeadingTitle
                }
                address {
                  ...Address
                }
                otherLinks {
                  ...OtherLink
                }
                socialMedia {
                  ...SocialMedia
                }
              }
            }
          }
        }
      }
    }
    ${HeadingTitle}
    ${OtherLinks}
    ${Address}
    ${SocialMedia}
    ${seo}
  `,
};
