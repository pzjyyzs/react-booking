import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export const MyNav = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .25);
    background-color: #fff;
    > ul {
        display: flex;
        > li{
            padding: 16px;
            width: 33.3333%;
            text-align: center;
        }
    }
`;

export const MyLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    &.selected {
        color: #E4BF88;
    }
`;

export const MyIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
`;