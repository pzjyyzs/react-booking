import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';

const BarChart: React.FC<any> = ({option}) => {
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

    return (
        <div ref={container} />
    )
}

export default BarChart;