import React, { useCallback, useState } from "react";
import Layout from "components/Layout";

import { StaHeader, StaList, StaWrapper } from "./style-component";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarChart from "./bar-chart";

const Statistics: React.FunctionComponent = () => {
  
  const [type, setType] = useState('pay');
  const { getStatisticsData, getTypeTotalAmount, getTagsTotalAmount } = useRecords();
  const { findTag } = useTags();
  const { month, totalPrice, } = getStatisticsData(type);
  const tagsAmount = getTagsTotalAmount(type);
  const totalAmount = useCallback(
    () => {
      let total = getTypeTotalAmount(type);
      let text = `${ type === 'pay' ? '支出' : '收入' }: ￥${ total }`
      return text;
      
    },
    [type, getTypeTotalAmount],
  )
  const option = {
    title: {
      text: totalAmount()
    },
    tooltip: {},
    xAxis: {
      data: month
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: totalPrice,
        type: 'bar'
      }
    ]
  }
  
  const onTagChange = (tag: string) => {
      if (tag !== type) {
        setType(tag);
      }
    }

    return (
      <Layout>
        <StaWrapper>
          <StaHeader>
            <button className={type === 'pay' ? 'selected' : ''} onClick={() => onTagChange('pay')}>支出</button>
            <button className={type === 'revenue' ? 'selected' : ''}  onClick={() => onTagChange('revenue')}>收入</button>
          </StaHeader>

          <BarChart option={option}></BarChart>
          {
            tagsAmount && tagsAmount.length !== 0 && (
              <StaList>
              <div className='title'>{ type === 'pay' ? '支出' : '收入' }排行榜</div>
              <ul>
                {
                  tagsAmount && tagsAmount.map(item => {
                    const tag = findTag(item.tagid);
                    return (
                        <li key={item.tagid}>
                          <div>
                            <FontAwesomeIcon className='icon' icon={tag!.icon}></FontAwesomeIcon>
                          </div>
                          <span>
                              { tag?.name }
                            </span>
                          {item.amount}
                        </li>
                    )
                  })
                }
              </ul>
            </StaList>
            )
          }

         
        </StaWrapper>
      </Layout>
    )
  }

export default Statistics;