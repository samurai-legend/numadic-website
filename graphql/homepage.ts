import { gql } from "@apollo/client";
import {
  Address,
  Collabration,
  HeadingTitle,
  InvestorLogos,
  Milestone,
  OpenPosition,
  OtherLinks,
  seo,
  SocialMedia,
  SolutionCard,
  UseCaseTabs,
} from "./fragments";

export const HomepageQuery = {
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
              ... on ComponentSectionsLanding {
                title
                description
              }
              ... on ComponentSectionsSolutions {
                heading {
                  ...HeadingTitle
                }
                solutionCards {
                  ...SolutionCard
                }
              }
              ... on ComponentSectionsUseCases {
                heading {
                  ...HeadingTitle
                }
                useCaseTabs {
                  ...UseCaseTabs
                }
              }
              ... on ComponentSectionsMovement {
                heading {
                  ...HeadingTitle
                }
                milestones {
                  ...Mileston
                }
                collaboration {
                  ...Collabration
                }
              }
              ... on ComponentSectionsInvestors {
                heading {
                  ...HeadingTitle
                }
                openPositions {
                  ...OpenPosition
                }
                investorLogos {
                  ...InvestorsLogos
                }
              }
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
    ${Milestone}
    ${Collabration}
    ${UseCaseTabs}
    ${SolutionCard}
    ${OpenPosition}
    ${InvestorLogos}
    ${Address}
    ${OtherLinks}
    ${SocialMedia}
    ${seo}
  `,
};
