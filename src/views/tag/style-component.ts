import styled from "styled-components";

export const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    font-size: 16px;
    text-align: center;
    background-color: #E4BF88;

    > button {
        background: none;
        color: #666;
        border: none;
        font-size: 24px;
    }

    .tag-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .empty {
        width: 24px;
        height: 24px;
    }
`;

export const InputTitle = styled.div`
    margin: 0 calc(calc(25% - 64px) / 2);
    margin-top: 10px;
    padding: 0 16px;
    text-align: center;
`;

export const ButtonGroup = styled.div`
    margin-top: 44px;
    padding: 16px;
    text-align: center;

    button {
        color: #fff;
        font-size: 18px;
        border-radius: 10px;
        border: none;
        width: 70px;
        height: 40px;

        &.update {
            background: #E4BF88;
        }

        &.del {
            margin-left: 15px;
            background-color: #8b0000;
        }
    }
    
`;