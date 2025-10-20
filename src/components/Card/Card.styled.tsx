import styled from '@emotion/styled';

export const CardWrapper = styled.div`
    width: fit-content;

    & hr {
        border: 0;
        border-top: 5px solid #F6CF57;
        border-style: dotted;
    }

    & .card:hover {
        background-color: #F6CF57;
        color: white;
        & hr {
            border-top: 5px solid white;
            border-style: dotted;
        }
    }

    & .card {
        border: 2px solid #F6CF57;
        border-radius: 15px;
    }

    & .card-header{
        font-weight: bold;
        font-size: 25px;
    }

    & .card-actions{
        text-align: center;
    }

    .card {
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: max-height 0.5s ease;
        transform-origin: top;
        max-height: 0;
    }

    .card.deplier {
        max-height: 1000px;
    }

    .card.plier {
        max-height: 0;
    }


`;
