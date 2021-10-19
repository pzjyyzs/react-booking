
import { faBolt, faBus, faChartLine, faCoins, faEllipsisV, faGamepad, faGraduationCap, faHospital, faMoneyBill, faPhone, faToiletPaper, faTshirt, faUtensils, faYenSign, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { categoryType } from 'views/money';
import { useState } from 'react';

type TagsProps = {
    id: number;
    type: string;
    name: string;
    icon: IconDefinition;
}

const defaultTags = [
    { id: 1, name: '餐饮', icon: faUtensils, type: 'pay' },
    { id: 2, name: '交通', icon: faBus, type: 'pay' },
    { id: 3, name: '日用', icon: faToiletPaper, type: 'pay' },
    { id: 4, name: '服饰', icon: faTshirt, type: 'pay' },
    { id: 5, name: '娱乐', icon: faGamepad, type: 'pay' },
    { id: 6, name: '学习', icon: faGraduationCap, type: 'pay' },
    { id: 7, name: '医疗', icon: faHospital, type: 'pay' },
    { id: 8, name: '水电', icon: faBolt, type: 'pay' },
    { id: 9, name: '通讯', icon: faPhone, type: 'pay' },
    { id: 10, name: '其他', icon: faEllipsisV, type: 'pay' },
    { id: 11, name: '薪资', icon: faMoneyBill, type: 'revenue' },
    { id: 12, name: '奖金', icon: faYenSign, type: 'revenue' },
    { id: 13, name: '投资', icon: faChartLine, type: 'revenue' },
    { id: 14, name: '红包', icon: faCoins, type: 'revenue' },
    { id: 15, name: '其他', icon: faEllipsisV, type: 'revenue' },
]
export const useTags = () => {
    const [tags] = useState<TagsProps[]>(defaultTags);
   
    const getTag = (type: categoryType) => {
        return tags.filter(item => item.type === type);
    }

    const findTag = (id: number) => {
        if (id) {
            return tags.find(item => item.id === id)
        }
    }

    return {
        tags,
        getTag,
        findTag
    }
}