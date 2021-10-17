import React, { useState } from 'react';
import { MoneyCategoryStyle } from '../style-components';

type CategoryProps = {
    value: 'pay' | 'revenue';
    onChange: (value: 'pay' | 'revenue') => void;
}
const MoneyCategory: React.FC<CategoryProps> = (props) => {
    const [catelist] = useState<('pay' | 'revenue')[]>(['pay', 'revenue'])
    const category = props.value;
    const categoryMap = { 'pay': '支出', 'revenue': '收入'}
    const onCategoryChange = (cate: 'pay' | 'revenue') => {
        if (category !== cate) {
            props.onChange(cate);
        }
    }

    return (
        <MoneyCategoryStyle>
            <ul>
                {
                    catelist.map(cate => {
                        return (
                            <li 
                                className={category === cate ? 'selected' : ''}
                                onClick={() => onCategoryChange(cate)}
                                key={cate}
                            >{ categoryMap[cate] }</li>
                        )
                    })
                }
          </ul>
        </MoneyCategoryStyle>
    )
}

export default MoneyCategory;