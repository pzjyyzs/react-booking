import styled from "styled-components";

export const TagsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Header = styled.header`
    background: #E4BF88;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 0;
`;

export const Calendar = styled.div`
    position: relative;
    display: flex;
    padding: 0 16px;
    flex-direction: column;
    align-items: center;

    & > .year {
        font-size: 12px;
        color: #a38932;
        padding: 0 3px;
        margin-bottom: 5px;
    }

    & > .month {
        font-size: 12px;
        padding: 0 3px;
        display: flex;
        align-items: center;
    }
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    padding: 4px 16px;

    & > .label {
        font-size: 12px;
        color: #a38932;
        margin-bottom: 4px;
    }

    & > .value {
        font-size: 20px;
    }
`;

export const Main = styled.div`
    flex-grow: 1;
    padding: 12px 16px;
    overflow: auto;

    > .empty {
        text-align: center;
        > .icon {
            font-size: 50px;
        }
        > div {
            margin-top: 10px;
        }
    }

    .tag-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        padding: 10px 8px;
        border-radius: 10px;
        box-shadow: 0px 0px 17px -1px rgb(132 132 132 / 15%);

        .tag-item-cate {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 14px;
            font-weight: 400;
        }

        .tag-item-amount {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            color: #c5c5c5;
            font-size: 12px;

            .price {
                font-size: 16px;
                font-weight: 700;
                color: #000;
            }
        }
    }
`;