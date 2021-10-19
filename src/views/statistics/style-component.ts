import styled from "styled-components";

export const StaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;

    
`;

export const StaHeader = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 8px 16px;
    background: #E4BF88;

    > button {
        width: 40%;
        background: none;
        outline: none;
        padding: 4px;
        border-radius: 10px;
        border: 1px solid #333;

        &.selected {
            background: #333;
            color: #E4BF88;
        }
    }
`;

export const StaList = styled.div`
    padding: 6px 16px;

    .title {
        font-size: 14px;
        text-align: left;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;

        > div {
            display: flex;
            align-items: center;
            font-size: 14px;
        }
        .icon {
            margin-right: 8px;
            width: 32px;
            height: 32px;
        }
    }
`;