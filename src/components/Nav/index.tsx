import React from 'react';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import { MyIcon, MyLink, MyNav } from './style-components';

const Nav =  () => (
    <MyNav>
          <ul>
            <li>
              <MyLink to='/tags' activeClassName='selected'>
                <MyIcon icon={FaIcons['faTag']}></MyIcon>
                标签页
              </MyLink>
            </li>
            <li>
              <MyLink to='/money' activeClassName='selected'>
                <MyIcon icon={FaIcons['faYenSign']}></MyIcon>
                记账页
                </MyLink>
            </li>
            <li>
              <MyLink to='/statistics' activeClassName='selected'>
                <MyIcon icon={FaIcons['faChartBar']}></MyIcon>
                统计页
              </MyLink>
            </li>
          </ul>
        </MyNav>
)

export default Nav;