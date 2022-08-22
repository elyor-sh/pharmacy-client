import React from 'react';
import Head from "next/head";
import {useTranslation} from "next-i18next";
import cl from './style.module.scss'
import {ContainerPh} from "../components/atoms/container";
import {Header} from "../components/header";

interface LayoutProps {
    children?: React.ReactChild
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    const { t } = useTranslation('common')

    return (
        <>
            <Head>
                <title>{t('title')}</title>
                <meta property="og:title" content={t('metaTitle')} key="title" />
            </Head>
            <header className={cl.header}>
               <Header />
            </header>
            <ContainerPh>
                {children}
            </ContainerPh>
        </>
    );
};

export {Layout}
