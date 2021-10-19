import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "components/Layout";
import * as echarts from 'echarts';
import { StaHeader, StaList, StaWrapper } from "./style-component";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Statistics: React.FunctionComponent = () => {
  
  const [type, setType] = useState('pay');
  const { getStatisticsData, getTypeTotalAmount, getTagsTotalAmount } = useRecords();
  const { findTag } = useTags();
  const { month, totalPrice, } = getStatisticsData(type);
  const tagsAmount = getTagsTotalAmount(type);
  
  const [option, setOption] = useState({
    title: {
      text: 'test'
    },
    tooltip: {},
    xAxis: {
      data: [] as any
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [] as any,
        type: 'bar'
      }
    ]
  });
  const container = useRef<HTMLDivElement>(null);
  const chart = useRef<any>(null);
  useEffect(() => {
    if (container && container.current &&  chart) {
      
      const width = document.documentElement.clientWidth;
      container.current.style.width = `100%`;
      container.current.style.height = `${(width - 20) * 1.2}px`;
      
      chart.current = echarts.init(container.current, 'dart')
    }

  }, []);

  useEffect(() => {
    chart.current.setOption(option);
  }, [option]);
  
  const totalAmount = useCallback(
    () => {
      let total = getTypeTotalAmount(type);
      let text = `${ type === 'pay' ? '支出' : '收入' }: ￥${ total }`
      return text;
      
    },
    [type, getTypeTotalAmount],
  )

  useEffect(() => {
    setOption({
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
    })
  }, totalPrice);
  
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

          
          <div ref={container} />

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
        </StaWrapper>
      </Layout>
    )
  }

export default Statistics;