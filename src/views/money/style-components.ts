import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MoneyTagStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
    margin: 0 calc(calc(25% - 64px) / 2);
    margin-top: 10px;
    background-color: #fff;
    > div {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        border-radius: 10px;
        box-shadow: 0px 0px 17px -1px rgb(132 132 132 / 15%);
        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px 20px;
            padding: 4px 18px;
            font-size: 16px;
            border-radius: 18px;
            &.selected {
                background: #E4BF88;
            }
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

export const MoneyNoteStyle = styled.div`
    margin: 0 calc(calc(25% - 64px) / 2);
    margin-top: 10px;
    padding: 0 16px;
    background: #fff;
    font-size: 14px;
    border-radius: 10px;
    box-shadow: 0px 0px 17px -1px rgb(132 132 132 / 15%);
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 55px;
      background: none;
      border: none;
      outline: none;
      color: #d1d1d1;
      text-align: right;
    }
  }
`;

export const MoneyCategoryStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background: #E4BF88;
    > ul{
        display:flex;
        color: #333;
        > li {
            width: 50%; 
            text-align:center;
            padding: 16px;
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

    > button {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        background: inherit;
        border: none;
        outline: none;
        font-size: 24px;
    }
`;

export const MoneyNumberStyle = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 10px;
    > .output{
        margin: 0 calc(calc(25% - 64px) / 2);
        padding: 0 20px;
        width: calc(100% - calc(25% - 64px));
        height: 55px;
        line-height: 55px;
        text-align: right;
        border-radius: 10px;
        border: 0;
        font-size: 20px;
        color: #d1d1d1;
        font-weight: 400;
        box-shadow: 0px 0px 17px -1px rgb(132 132 132 / 15%);
        background-color: #fff;
        }
    > .pad{ 
        margin-top: 10px;
        background-color: #fff;
        > button {
            margin-bottom: 25px;
            font-size: 20px; float: left; width: 25%; height: 64px; border: none;
            background:#fff;
                color: #E4BF88;
            &.ok{ height: 128px; float: right; }
            &.zero{ width: 50%; }
            /* &:nth-child(1){
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
            } */

            i {
                display: inline-block;
                width: 64px;
                height:64px;
                line-height: 64px;
                background-color: #fff;
                cursor: pointer;
                border-radius: 100%;
                transition: 250ms;
                user-select: none;
                box-shadow: 8px 8px 24px 0px rgb(132 132 132 / 9%);
            }
        }
    }
`;

export const MyLayout  = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const TagIcon = styled(FontAwesomeIcon)`
`;