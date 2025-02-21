import { css } from '@emotion/react';
import React, { ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../assets/Logo.png';

const Header = () => {
    const styles = {
        banner: css({
            background: '#ba0202',
            padding: '1rem 8rem',
        }),
        container: css({
            alignItems: 'center',
            justifyContent: 'center',
        }),
        text: css({
            color: '#fff',
            textTransform: 'uppercase',
        })
    }

    return (
        <Grid container spacing={2} css={styles.container}>
            <Grid item>
                <Box css={styles.banner}>
                    <Typography css={styles.text}>
                        - 50% off - Monthly Mosquito Control - New!!! Mosquito Misting Control Systems -
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={4}>
                8016860627
            </Grid>
            <Grid item lg={4}>
                <img src={Logo} alt='Logo' />
            </Grid>
            <Grid item lg={4}>
                <SearchIcon /> <ShoppingCartIcon />
            </Grid>
        </Grid>
    );
};

export default Header;