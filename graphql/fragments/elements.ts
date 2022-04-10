import { gql } from "@apollo/client";

export const ImageFragmentDoc = gql`
  fragment Image on UploadFileEntity {
    id
    attributes {
      url
      alternativeText
    }
  }
`;

export const FactsFragmentDoc = gql`
  fragment Facts on ComponentFactsMessageBubble {
    price
    icon {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;

export const HeadingTitleFragmentDoc = gql`
  fragment HeadingTitle on ComponentElementsHeading {
    sectionName
    title
  }
`;

export const CardFragmentDoc = gql`
  fragment Card on ComponentElementsCardTypeA {
    cardTitle
    description
    image {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;
export const UseCaseTabsFragmentDoc = gql`
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
  ${FactsFragmentDoc}
  ${CardFragmentDoc}
`;
export const SolutionCardFragmentDoc = gql`
  fragment SolutionCard on ComponentElementsSolutionCard {
    title
    description
    icon {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;
export const MilestonFragmentDoc = gql`
  fragment Mileston on ComponentElementsMilestones {
    subtitle
    amount
  }
`;
export const CollabrationFragmentDoc = gql`
  fragment Collabration on ComponentElementsClientsLogos {
    title
    images {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;
export const SeoFragmentDoc = gql`
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
  ${ImageFragmentDoc}
`;
export const OpenPositionFragmentDoc = gql`
  fragment OpenPosition on ComponentElementsOpenPositions {
    title
    description
    openPositionLink {
      label
      link
    }
  }
`;
export const InvestorsLogosFragmentDoc = gql`
  fragment InvestorsLogos on ComponentElementsInvestorLogo {
    id
    image {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;
export const SocialMediaFragmentDoc = gql`
  fragment SocialMedia on ComponentElementsSocialMedia {
    url
    image {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;

export const LinksFragmentDoc = gql`
  fragment Links on ComponentElementsLinks {
    id
    label
    url
    tag {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

export const OtherLinkFragmentDoc = gql`
  fragment OtherLink on ComponentElementsOtherLinks {
    title
    linkTitle
    links {
      ...Links
    }
  }
  ${LinksFragmentDoc}
`;
export const AddressFragmentDoc = gql`
  fragment Address on ComponentElementsAddress {
    location
    address
    id
  }
`;

export const ButtonFragmentDoc = gql`
  fragment Button on ComponentElementsButton {
    id
    label
    link
  }
`;

export const GoalFragmentDoc = gql`
  fragment Goal on ComponentElementsGoal {
    id
    year
    description
  }
`;

export const NumadPeopleFragmentDoc = gql`
  fragment NumadPeople on ComponentElementsNumadPeople {
    id
    firstName
    lastName
    image {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;

export const TitleWithDescriptionFragmentDoc = gql`
  fragment TitleWithDescription on ComponentElementsTitleWithDescription {
    id
    title
    description
  }
`;

export const TraitsFragmentDoc = gql`
  fragment Traits on ComponentElementsTraits {
    id
    text
  }
`;

export const ValueCardFragmentDoc = gql`
  fragment ValueCard on ComponentElementsValueCard {
    id
    title
    description
    icon {
      data {
        ...Image
      }
    }
  }
  ${ImageFragmentDoc}
`;
