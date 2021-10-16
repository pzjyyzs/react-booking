import React from 'react';
import { Link } from 'react-router-dom';
import { MyNav } from './style-components';

const Nav =  () => (
    <MyNav>
          <ul>
            <li>
              <Link to='/tags'>标签页</Link>
            </li>
            <li>
              <Link to='/money'>记账页</Link>
            </li>
            <li>
              <Link to='/statistics'>统计页</Link>
            </li>
          </ul>
        </MyNav>
)

export default Nav;