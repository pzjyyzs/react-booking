import styled from "styled-components";

export const MyNav = styled.nav`
    border: 1px solid blue;
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .25);
    > ul {
        display: flex;
        > li{
            padding: 16px;
            width: 33.3333%;
            text-align: center;
        }
    }
`;