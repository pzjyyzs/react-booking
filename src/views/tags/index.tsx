import React from 'react';
import Layout from "components/Layout";
import { add } from 'mathjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Calendar, Header, Info, Main, TagsWrapper, Title, Total } from './style-component';
import { useRecords } from 'hooks/useRecords';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useTags } from 'hooks/useTags';
import { Link } from 'react-router-dom';
import day from 'dayjs';

const Tags:React.FunctionComponent = () => {
    const {records} = useRecords();
    const { findTag } = useTags();
    const isEmpty = !records || records.length === 0;
    const getRevenue = (type: 'revenue'| 'pay') => {
      return records
                  .filter(item => item.category === type)
                  .reduce((total: any, item) => {
                    return add(parseFloat(item.amount), total);
                  }, 0);
    }

    return (
      <Layout>
        <TagsWrapper>
        <Header>
          <Title>我的账本</Title>
          <Info>
            <Calendar>
              <div className='year'>{ new Date().getFullYear() } 年</div>
              <div className='month'>{ new Date().getMonth() + 1 } 月</div>
            </Calendar>
            <Total>
              <div>
                <div className='label'>收入</div>
                <div className="value">￥{ getRevenue('revenue') }</div>
              </div>
              <div>
                <div className='label'>支出</div>
                <div className="value">￥{ getRevenue('pay') }</div>
              </div>
            </Total>
          </Info>
        </Header>

        <Main>
          { isEmpty && (
            <div className='empty'>
              <FontAwesomeIcon className='icon' icon={faExclamationCircle}></FontAwesomeIcon>
              <div>暂时还没有记录. 快去记一笔吧~</div>
            </div>
            )
          }

          {
            !isEmpty && records.map(item => {
              return (
                <Link key={item.createdAt} to={'/tags/' + item.id}>
                <div className='tag-item'>
                  <FontAwesomeIcon className='icon' icon={ findTag(item.tagIds)!.icon}></FontAwesomeIcon>
                  <span className='tag-item-cate'>{ findTag(item.tagIds)!.name }</span>
                  <span className='tag-item-amount'>
                    <span className='price'>￥{ item.category === 'pay' ? '-' : '+'}{item.amount}</span>
                    {day(item.createdAt).format('YYYY-MM-DD')}
                  </span>
                </div>
                </Link>
                
              )
            })
          }
        </Main>
        </TagsWrapper>
        
      </Layout>
    )
  }
export default Tags