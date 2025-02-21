import { ReactElement, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Box, Grid, Typography } from '@mui/material';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FrameWrapper from "./FrameWrapper";

const Home = (): ReactElement => {
    const videoSrc = 'https://player.vimeo.com/video/1047501758?h=31195622e1&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0';

    const styles = {
        container: css({
            background: '#a30202',
            alignContent: 'center',
        }),
        text: css({
            fontFamily: '\'Montserrat\', arial, sans-serif',
            textTransform: 'uppercase'
        }),
        white: css({
            color: '#fff'
        })
    }

    return (
        <>
            <Header />
            <br />
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <FrameWrapper videoSrc={videoSrc} />
                </Grid>
                <Grid item lg={6} css={styles.container}>
                    <Box>
                        <Typography css={[styles.text, styles.white]}>
                            - Exquisite Landscaping -
                        </Typography>
                    </Box>
                    <br />
                    <Box>
                        <Typography css={[styles.text, styles.white]}>
                            Custom Landscape Design &amp; Construction
                        </Typography>
                    </Box>
                    <br />
                    <Box>
                        <Typography css={styles.white}>
                            Innovative solutions for beautiful outdoor spaces
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
};

export default Home;