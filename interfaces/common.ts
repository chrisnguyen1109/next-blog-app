import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';

export type LayoutProps = React.FC<{ children: ReactNode }>;

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    Layout?: LayoutProps;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export type MarkDownComponent = Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
>;
