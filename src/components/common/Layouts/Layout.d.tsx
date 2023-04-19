import {
  NextComponentType,
  NextPage,
  NextPageContext,
} from 'next';
import { AppProps } from 'next/app';
import { LayoutKeys } from './index';
import { Menu } from "@/generated/graphql";

export type MyPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};

export type MyAppProps = AppProps & {
  menus: Menu
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  }
};
