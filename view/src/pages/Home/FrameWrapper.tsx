import React, { useRef, useState } from 'react';
import { css } from '@emotion/react';

interface Props {
    videoSrc: string;
}

const FrameWrapper = ({ videoSrc }: Props) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const styles = {
        container: css({
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
        }),
        iframe: css({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
        }),
    };

    return (
        <div css={styles.container}>
            <iframe ref={ref}
                    src={videoSrc}
                    css={styles.iframe}
                    allow='autoplay; fullscreen'
                    allowFullScreen />
        </div>
    );

};

export default FrameWrapper;
