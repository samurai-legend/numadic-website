import { NextPage } from "next";
import { AppProps } from "next/app";
export type CustomPage<P = {}, IP = P> = NextPage<P, IP> & {
  innerPage?: boolean;
};

export type MyAppProps<P = {}> = AppProps<P> & {
  Component: CustomPage<P>;
  emotionCache: any;
};
