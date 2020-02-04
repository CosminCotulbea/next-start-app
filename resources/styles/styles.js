/* styles.js */
import css from 'styled-jsx/css';

export const bodyBackground = (url) => {
    return css.global`
        html {
            min-height: 100%;
        }
        body {
            min-height: 100%;
            background-image: url(${url});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }`;
};
