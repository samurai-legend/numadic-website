import { gql } from "@apollo/client";
import { SeoFragmentDoc } from "./fragments/elements";
import {
  FooterSectionFragmentDoc,
  JoinUsSectionFragmentDoc,
  LandingInnerSectionFragmentDoc,
  NumadsSectionFragmentDoc,
  QuoteSectionFragmentDoc,
  RoadmapSectionFragmentDoc,
  ValuesSectionFragmentDoc,
} from "./fragments/sections";

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
              __typename
              ...LandingInnerSection
              ...QuoteSection
              ...RoadmapSection
              ...ValuesSection
              ...NumadsSection
              ...JoinUsSection
              ...FooterSection
            }
          }
        }
      }
    }
    ${SeoFragmentDoc}
    ${LandingInnerSectionFragmentDoc}
    ${QuoteSectionFragmentDoc}
    ${RoadmapSectionFragmentDoc}
    ${ValuesSectionFragmentDoc}
    ${NumadsSectionFragmentDoc}
    ${JoinUsSectionFragmentDoc}
    ${FooterSectionFragmentDoc}
  `,
};
