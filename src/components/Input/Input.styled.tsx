import styled from '@emotion/styled';

export const InputWrapper = styled.div`
    padding: 10px;
    width: fit-content;

    & input {
        padding: 5px;
        border-radius: 10px;
        border-color: #F6CF57;
;
    } 

    & input:required{
        border: 2px solid red;
    }

`;
