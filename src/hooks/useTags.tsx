
import { faBolt, faBus, faChartLine, faCoins, faEllipsisV, faGamepad, faGraduationCap, faHospital, faMoneyBill, faPhone, faToiletPaper, faTshirt, faUtensils, faYenSign } from '@fortawesome/free-solid-svg-icons';
import { categoryType } from 'views/money';

/* type TagsProps = {
    id: number;
    name: string;
    icon: IconDefinition;
} */
export const getTags = (type: categoryType) => {
    let data = [];
    if (type === 'pay') {
        data = [
            { id: 1, name: '餐饮', icon: faUtensils },
            { id: 2, name: '交通', icon: faBus },
            { id: 3, name: '日用', icon: faToiletPaper },
            { id: 4, name: '服饰', icon: faTshirt },
            { id: 5, name: '娱乐', icon: faGamepad },
            { id: 6, name: '学习', icon: faGraduationCap },
            { id: 7, name: '医疗', icon: faHospital },
            { id: 8, name: '水电', icon: faBolt },
            { id: 9, name: '通讯', icon: faPhone },
            { id: 10, name: '其他', icon: faEllipsisV },
        ]
    } else {
        data = [
            { id: 1, name: '薪资', icon: faMoneyBill },
            { id: 2, name: '奖金', icon: faYenSign },
            { id: 3, name: '投资', icon: faChartLine },
            { id: 4, name: '红包', icon: faCoins },
            { id: 5, name: '其他', icon: faEllipsisV },
        ]
    }
    
    return {
        tags: data
    }
}