import { gql } from "@apollo/client";

export const ImageFile = gql`
  fragment Image on UploadFileEntity {
    attributes {
      url
      alternativeText
    }
  }
`;

export const CardTypeA = gql`
  fragment Card on ComponentElementsCardTypeA {
    cardTitle
    description
    image {
      data {
        ...Image
      }
    }
  }
  ${ImageFile}
`;

export const Facts = gql`
  fragment Facts on ComponentFactsMessageBubble {
    price
    icon {
      data {
        ...Image
      }
    }
  }
  ${ImageFile}
`;

export const HeadingTitle = gql`
  fragment HeadingTitle on ComponentElementsHeading {
    sectionName
    title
  }
`;
export const UseCaseTabs = gql`
  fragment UseCaseTabs on ComponentElementsUseCaseTab {
    tabTitle
    tabContent
    facts {
      ...Facts
    }
    card {
      ...Card
    }
  }
  ${Facts}
  ${CardTypeA}
`;

export const SolutionCard = gql`
  fragment SolutionCard on ComponentElementsSolutionCard {
    title
    description
    icon {
      data {
        ...Image
      }
    }
  }
  ${ImageFile}
`;

export const Milestone = gql`
  fragment Mileston on ComponentElementsMilestones {
    subtitle
    amount
  }
`;

export const Collabration = gql`
  fragment Collabration on ComponentElementsClientsLogos {
    title
    images {
      data {
        ...Image
      }
    }
  }
  ${ImageFile}
`;
