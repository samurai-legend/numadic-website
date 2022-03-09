import { gql } from "@apollo/client";

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
                  title
                  sectionName
                }
                solutionCards {
                  title
                  description
                  icon {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
              }
              ... on ComponentSectionsUseCases {
                heading {
                  sectionName
                  title
                }
                useCaseTabs {
                  tabTitle
                  tabContent
                  facts {
                    price
                    icon {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  card {
                    cardTitle
                    description
                    image {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
};
