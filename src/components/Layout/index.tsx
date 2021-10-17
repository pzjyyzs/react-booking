import React from 'react';
import Nav from 'components/Nav';
import { Main, Wrapper } from './style-components';

interface layoutProps {
    className?: string;
}
const Layout: React.FunctionComponent<layoutProps> = (props) => {
    return (
        <Wrapper>
            <Main className={props.className}>
                { props.children }
            </Main>
            <Nav></Nav>
        </Wrapper>
    )
}

export default Layout;