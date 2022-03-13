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

export const seo = gql`
  fragment Seo on ComponentSharedSeo {
    metaTitle
    metaImage {
      data {
        ...Image
      }
    }
    metaDescription
    metaSocial {
      description
      socialNetwork
      title
      image {
        data {
          ...Image
        }
      }
    }
    metaRobots
    structuredData
    metaViewport
    canonicalURL
    keywords
  }
  ${ImageFile}
`;

export const OpenPosition = gql`
  fragment OpenPosition on ComponentElementsOpenPositions {
    title
    description
    openPositionLink {
      label
      link
    }
  }
`;

export const InvestorLogos = gql`
  fragment InvestorsLogos on ComponentElementsInvestorLogo {
    id
    image {
      data {
        ...Image
      }
    }
  }
  ${ImageFile}
`;

export const SocialMedia = gql`
  fragment SocialMedia on ComponentElementsSocialMedia {
    url
    image {
      data {
        ...Image
      }
    }
  }
  ${ImageFile}
`;

export const OtherLinks = gql`
  fragment OtherLink on ComponentElementsOtherLinks {
    title
    linkTitle
    links {
      id
      label
      url
    }
  }
`;

export const Address = gql`
  fragment Address on ComponentElementsAddress {
    location
    address
    id
  }
`;
