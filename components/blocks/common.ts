import styled from "@emotion/styled";
import tw from "twin.macro";

const SectionContainer = styled.div(() => [tw`h-full w-screen relative`]);

const ContentWrapper = styled.div(() => [
  tw`container mx-auto relative h-full pt-24 tall-lg:pt-28 `,
]);

export { SectionContainer, ContentWrapper };
