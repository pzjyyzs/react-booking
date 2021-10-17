import React from 'react';
import Nav from 'components/Nav';
import { Main, Wrapper } from './../../styled-component';

const Layout: React.FunctionComponent = (props) => {
    return (
        <Wrapper>
            <Main>
                { props.children }
            </Main>
            <Nav></Nav>
        </Wrapper>
    )
}

export default Layout;