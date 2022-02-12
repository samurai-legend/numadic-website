import styled from "@emotion/styled";
import tw from "twin.macro";

const SectionContainer = styled.div(() => [tw`h-full w-screen relative`]);

const ContentWrapper = styled.div(() => [
  tw`container mx-auto relative h-full pt-20 2xl:pt-40 tall-xs:pt-20 tall-md:pt-32`,
]);

export { SectionContainer, ContentWrapper };
