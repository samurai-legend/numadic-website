import { gql } from "@apollo/client";
import {
  AddressFragmentDoc,
  CollabrationFragmentDoc,
  GoalFragmentDoc,
  HeadingTitleFragmentDoc,
  ImageFragmentDoc,
  InvestorsLogosFragmentDoc,
  LinksFragmentDoc,
  MilestonFragmentDoc,
  NumadPeopleFragmentDoc,
  OpenPositionFragmentDoc,
  OtherLinkFragmentDoc,
  SocialMediaFragmentDoc,
  SolutionCardFragmentDoc,
  TitleWithDescriptionFragmentDoc,
  TraitsFragmentDoc,
  UseCaseTabsFragmentDoc,
  ValueCardFragmentDoc,
} from "./elements";

export const LandingSectionFragmentDoc = gql`
  fragment LandingSection on ComponentSectionsLanding {
    id
    title
    description
  }
`;

export const FooterSectionFragmentDoc = gql`
  fragment FooterSection on ComponentSectionsFooter {
    id
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
  ${HeadingTitleFragmentDoc}
  ${AddressFragmentDoc}
  ${OtherLinkFragmentDoc}
  ${SocialMediaFragmentDoc}
`;

export const InvestorsSectionFragmentDoc = gql`
  fragment InvestorsSection on ComponentSectionsInvestors {
    id
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
  ${HeadingTitleFragmentDoc}
  ${OpenPositionFragmentDoc}
  ${InvestorsLogosFragmentDoc}
`;

export const JoinIfSectionFragmentDoc = gql`
  fragment JoinIfSection on ComponentSectionsJoinIf {
    id
    title
    traits {
      ...Traits
    }
  }
  ${TraitsFragmentDoc}
`;

export const JoinUsSectionFragmentDoc = gql`
  fragment JoinUsSection on ComponentSectionsJoinUs {
    id
    caption
    title
    positionButton {
      ...Links
    }
    image {
      data {
        ...Image
      }
    }
  }
  ${LinksFragmentDoc}
  ${ImageFragmentDoc}
`;

export const LandingInnerSectionFragmentDoc = gql`
  fragment LandingInnerSection on ComponentSectionsLandingInner {
    id
    title
    description
    buttonLink {
      ...Links
    }
  }
  ${LinksFragmentDoc}
`;

export const LookingForSectionFragmentDoc = gql`
  fragment LookingForSection on ComponentSectionsLookingFor {
    id
    Images {
      data {
        ...Image
      }
    }
    lookingFor
  }
  ${ImageFragmentDoc}
`;

export const MovementSectionFragmentDoc = gql`
  fragment MovementSection on ComponentSectionsMovement {
    id
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
  ${HeadingTitleFragmentDoc}
  ${MilestonFragmentDoc}
  ${CollabrationFragmentDoc}
`;

export const NumadsSectionFragmentDoc = gql`
  fragment NumadsSection on ComponentSectionsNumads {
    id
    title
    content {
      ...TitleWithDescription
    }
    numads {
      ...NumadPeople
    }
  }
  ${TitleWithDescriptionFragmentDoc}
  ${NumadPeopleFragmentDoc}
`;

export const QuoteSectionFragmentDoc = gql`
  fragment QuoteSection on ComponentSectionsQuote {
    id
    quoteTitle: title
    quote
  }
`;

export const ReachOutSectionFragmentDoc = gql`
  fragment ReachOutSection on ComponentSectionsReachOut {
    id
    title
    emailText
  }
`;

export const RoadmapSectionFragmentDoc = gql`
  fragment RoadmapSection on ComponentSectionsRoadmap {
    id
    caption
    roadmapTitle: title
    goals {
      ...Goal
    }
  }
  ${GoalFragmentDoc}
`;

export const SolutionsSectionFragmentDoc = gql`
  fragment SolutionsSection on ComponentSectionsSolutions {
    id
    heading {
      ...HeadingTitle
    }
    solutionCards {
      ...SolutionCard
    }
  }
  ${SolutionCardFragmentDoc}
  ${HeadingTitleFragmentDoc}
`;

export const UseCasesSectionFragmentDoc = gql`
  fragment UseCasesSection on ComponentSectionsUseCases {
    id
    heading {
      ...HeadingTitle
    }
    useCaseTabs {
      ...UseCaseTabs
    }
  }
  ${UseCaseTabsFragmentDoc}
  ${HeadingTitleFragmentDoc}
`;

export const ValuesSectionFragmentDoc = gql`
  fragment ValuesSection on ComponentSectionsValues {
    id
    caption
    valueTitle: title
    valueCards {
      ...ValueCard
    }
  }
  ${ValueCardFragmentDoc}
`;
