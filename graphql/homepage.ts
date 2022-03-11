import { gql } from "@apollo/client";
import {
  Collabration,
  HeadingTitle,
  Milestone,
  SolutionCard,
  UseCaseTabs,
} from "./fragments";

export const HomepageQuery = {
  query: gql`
    query Homepage {
      homepage {
        data {
          attributes {
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
  `,
};
