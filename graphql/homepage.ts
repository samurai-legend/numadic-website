import { gql } from "@apollo/client";
import { SeoFragmentDoc } from "./fragments/elements";
import {
  FooterSectionFragmentDoc,
  InvestorsSectionFragmentDoc,
  LandingSectionFragmentDoc,
  MovementSectionFragmentDoc,
  SolutionsSectionFragmentDoc,
  UseCasesSectionFragmentDoc,
} from "./fragments/sections";

export const HomepageDocument = {
  query: gql`
    query Homepage {
      homepage {
        data {
          attributes {
            seo {
              ...Seo
            }
            sections {
              __typename
              ...LandingSection
              ...SolutionsSection
              ...UseCasesSection
              ...MovementSection
              ...InvestorsSection
              ...FooterSection
            }
          }
        }
      }
    }
    ${SeoFragmentDoc}
    ${LandingSectionFragmentDoc}
    ${SolutionsSectionFragmentDoc}
    ${UseCasesSectionFragmentDoc}
    ${MovementSectionFragmentDoc}
    ${InvestorsSectionFragmentDoc}
    ${FooterSectionFragmentDoc}
  `,
};
