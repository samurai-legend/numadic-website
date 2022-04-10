import { gql } from "@apollo/client";
import { SeoFragmentDoc } from "./fragments/elements";
import {
  FooterSectionFragmentDoc,
  JoinIfSectionFragmentDoc,
  LandingInnerSectionFragmentDoc,
  LookingForSectionFragmentDoc,
  ReachOutSectionFragmentDoc,
} from "./fragments/sections";

export const ContactUsQuery = {
  query: gql`
    query CareersPage {
      careersPage {
        data {
          attributes {
            seo {
              ...Seo
            }
            sections {
              __typename
              ...LandingInnerSection
              ...ReachOutSection
              ...JoinIfSection
              ...LookingForSection
              ...FooterSection
            }
          }
        }
      }
    }
    ${SeoFragmentDoc}
    ${LandingInnerSectionFragmentDoc}
    ${ReachOutSectionFragmentDoc}
    ${JoinIfSectionFragmentDoc}
    ${LookingForSectionFragmentDoc}
    ${FooterSectionFragmentDoc}
  `,
};
