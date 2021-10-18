import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MoneyCategoryStyle } from '../style-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { createHashHistory }  from 'history'; 

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

    const onPushBack = () => {
        createHashHistory().goBack();
    }

    return (
        <MoneyCategoryStyle>
            <button onClick={onPushBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
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