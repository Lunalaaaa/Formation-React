import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
    width: auto;
    cursor: pointer;
    width: fit-content;
    border-radius: 10px;
    padding: 5px;


    &.small {
        font-size: small;
    }

    &.medium {
        font-size: medium;
    }
    
    &.large {
        font-size: large;
    }

    &.primary {
        background-color: yellow;
        color: black;
        &:hover {
            background-color: #F6CF57;
        }
    }

    &.optional {
        background-color: white;
        color: black;
        &:hover {
            background-color: darkgray;
        }
    }

    &.critical {
        background-color: black;
        color: #F6CF57;
        &:hover {
            background-color: #1e1d1c;
        }
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
    }

`;
