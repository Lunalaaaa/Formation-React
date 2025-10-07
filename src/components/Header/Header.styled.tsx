import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
    border-bottom: 1px solid black;
    /* display: block; */
    /* padding: 10px; */
    font-size: larger;
    font-weight: bold;
    height: 40px;

    &:hover nav {
        opacity: 1;
    }

    nav {
        opacity: 0;
        transition: opacity 0.5s ease;
        position: relative;
        display: flex;
        background-color: black;
        color: white;
        height: auto;
        width: 100%;
        top: 40px;
        gap: 20px;
        position: absolute;
        padding: 10px 0;
    }

    & nav ul {
        list-style: none;
        display: flex;
        padding: 0;
        gap: 0 20px;
        padding: 0;
        margin: 0;
        align-items: center;
        height: 100%;
        float: left;
        shape-outside: circle(50%);
    }

    & nav ul li {
        height: 100%;
        display: flex;
    }

    & nav ul li a {
        text-decoration: none;
        color: white;
        display: block;
        height: 100%;
    }

    & .pikachu {
        color: #F6CF57;
    }
`;
