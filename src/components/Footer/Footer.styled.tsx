import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
    border-top: 1px solid black;
    text-align: center;
    position: fixed;
    bottom: 0;
    padding: 10px;
    font-size: larger;
    font-weight: bold;
    width: 100%;
    height: 40px;
    background-color: #F6CF57;
    display: table-column;

    &:hover {
        background-color: #ffdf80;
    }

    &#infosContact {
        display: table-row;
    }
    &#infosLegales {
        display: table-row;
    }
    &#infosReseauxSociaux {
        display: table-row;
    }
`;
