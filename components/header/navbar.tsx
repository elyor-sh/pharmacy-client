import React from 'react';
import {Container, Grid} from "@mui/material";
import {useRouter} from "next/router";
import cl from './style.module.scss'
import {Logo} from "../atoms/logo";
import {GBFlag, RusFlag, UzFlag} from "../../assets/flags";

const Navbar = () => {

    const router = useRouter()
    const { pathname, asPath, query } = router

    const handleClick = async (locale: string) => {
        await router.push({ pathname, query }, asPath, { locale })
    }

    return (
        <div className={cl.navbar}>
            <Container>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <div className={cl.navbarLogo}>
                        <Logo />
                    </div>
                    <div className={cl.lang__wrapper}>
                        <div
                            className={cl.lang__item}
                            onClick={() => handleClick('en')}
                        >
                            <GBFlag />
                        </div>
                        <div
                            className={cl.lang__item}
                            onClick={() => handleClick('ru')}
                        >
                            <RusFlag />
                        </div>
                        <div
                            className={cl.lang__item}
                            onClick={() => handleClick('uz')}
                        >
                            <UzFlag />
                        </div>
                    </div>
                </Grid>
            </Container>
        </div>
    );
};

export {Navbar}
