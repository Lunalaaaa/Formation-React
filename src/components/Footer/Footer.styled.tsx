import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
    position: relative;
    background-color: #F6CF57;
    text-align: center;
    border-top: 1px solid black;
    padding: 10px;
    width: 100%;
    font-size: larger;
    font-weight: bold;

    .footer-image {
        position: absolute;
        top: -100px; 
        left: 0;
        width: 100%;
        text-align: center;
    }

    #footerContainer {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    @media (min-width: 768px) {
        #footerContainer {
        grid-template-columns: repeat(3, 1fr);
        }
    }

    #footerContainer > div {
        padding: 1rem;
        border-radius: 8px;
    }

    #footerContainer h4 {
        margin-bottom: 1rem;
        color: #f0f0f0;
    }

    #footerContainer ul {
        list-style: none;
        padding: 0;
    }

    #footerContainer li {
        margin-bottom: 0.5rem;
    }

    #general {
        text-align: center;
        margin-top: 2rem;
        font-size: 0.9rem;
        opacity: 0.8;
    }

    &:hover {
        background-color: #ffdf80;
    }

`;
