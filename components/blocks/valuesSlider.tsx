import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import tw from "twin.macro";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import ValueCard from "../elements/valueCard";
import Heart from "@/svg/values/heart.svg";
import Circle from "@/svg/values/circle.svg";
import SlantLine from "@/svg/values/slant-lines.svg";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SliderContainer = styled.div(() => [
  tw`relative w-full container mx-auto mt-16`,
  css`
    .swiper {
      ${tw`overflow-visible`}
      .swiper-slide{
        ${tw`h-auto`}
      }
    }
  `,
]);

const ValueSlider: React.FC<any> = (props: any) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(false);

  return (
    <InnerContentWrapper padding>
      <div css={tw`flex flex-col items-center container mx-auto`}>
        <Typography
          as="span"
          type="overline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
        >
          values
        </Typography>
        <AnimatedCharacters
          as="h2"
          isColor
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          css={tw`leading-[1.25rem] max-w-full text-center 2xl:(max-w-6xl) md:(max-w-3xl) lg:(text-left max-w-4xl)`}
          text="We got here because we believed in our virtues"
        />
      </div>
      <SliderContainer>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          onSwiper={setSwiperInstance}
          preloadImages
          lazy={false}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <ValueCard
              Icon={Heart}
              title="humble"
              description="We've been humbled and we find peace in being humble."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ValueCard
              Icon={Circle}
              title="Still"
              description="We are still at our core."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ValueCard
              Icon={SlantLine}
              title="Fast"
              description="We are fast on the front lines."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ValueCard Icon={Heart} title="Candour" description="Candour ..." />
          </SwiperSlide>
        </Swiper>
      </SliderContainer>
    </InnerContentWrapper>
  );
};

export default ValueSlider;
