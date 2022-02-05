import styled from "@emotion/styled";
import tw from "twin.macro";

const SectionContainer = styled.div(() => [tw`h-full w-screen pt-40 relative`]);

const ContentWrapper = styled.div(() => [
  tw`container mx-auto relative h-full`,
]);

export { SectionContainer, ContentWrapper };
