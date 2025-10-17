import styled from '@emotion/styled';

export const InputWrapper = styled.div`
    padding: 10px;
    width: fit-content;
    display: flex;
    align-content: center;
    gap: 5px;

    & input {
        padding: 5px;
        border-radius: 10px;
        border-color: #F6CF57;
    } 

    & :focus {
        border-color: yellow;
    }

    & svg {
        width: 25px;
        height: 25px;
    }

    & input:required:invalid{
        border: 2px solid red;
        & .alertIcon {
            display: block;
        }
    }

    & input:required:valid{
        border: 2px solid green;
        & .alertIcon {
            display: block;
        }
    }



`;
