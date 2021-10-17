import Layout from "components/Layout";
import styled from "styled-components";

export const MoneyTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-grow: 1;
    padding: 12px 16px;
    background-color: #fff;
    > ol {
        margin: 0 -12px;
        > li {
            display: inline-block;
            margin: 8px 12px;
            padding: 4px 18px;
            font-size: 14px;
            background: #d9d9d9;
            border-radius: 18px;
        }
    }
    > button {
        background: none;
        color: #666;
        border: none;
        padding: 2px 4px;
        border-bottom: 1px solid #333;
    }
`;

export const MoneyNote = styled.div`
    padding: 0 16px;
    background: #f5f5f5;
    font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

export const MoneyCategory = styled.div`
    font-size: 24px;
    > ul{
        display:flex;
        background:#c4c4c4;
        > li {
            width: 50%; 
            text-align:center;
            padding: 16px 0;
            position:relative;
            &.selected::after{
                content: '';
                display:block; 
                height: 3px;
                background:#333;
                position:absolute;
                bottom:0;
                width: 100%;
                left: 0;
            }
        }
    }
`;

export const MoneyNumber = styled.div`
    display:flex;
    flex-direction: column;
    > .output{
        background:white;
        font-size: 36px;
        line-height: 72px;
        text-align:right;
        padding: 0 16px;
        box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                    inset 0 5px 5px -5px rgba(0,0,0,0.25);
        }
    > .pad{ 
        > button {
            font-size: 18px; float: left; width: 25%; height: 64px; border: none;
            &.ok{ height: 128px; float: right; }
            &.zero{ width: 50%; }
            &:nth-child(1){
                background:#f2f2f2;
            }
            &:nth-child(2),
            &:nth-child(5) {
                background:#E0E0E0;
            }
            &:nth-child(3),
            &:nth-child(6),
            &:nth-child(9) {
                background:#D3D3D3;
            }
            &:nth-child(4),
            &:nth-child(7),
            &:nth-child(10) {
                background:#C1C1C1;
            }
            &:nth-child(8),
            &:nth-child(11),
            &:nth-child(13) {
                background:#B8B8B8;
            }
            &:nth-child(12) {
                background:#9A9A9A;
            }
            &:nth-child(14) {
                background:#A9A9A9;
            }
        }
    }
`;

export const MyLayout  = styled(Layout)`
    display: flex;
    flex-direction: column;
`;