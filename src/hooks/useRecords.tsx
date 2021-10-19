import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";
import { createId } from "lib/createId";
import day from 'dayjs';
import { add } from "mathjs";

export type RecordItem = {
    id: string
    tagIds: number
    note: string
    category: 'pay' | 'revenue'
    amount: string
    createdAt: string // ISO 8601
}
export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        let total = JSON.parse(window.localStorage.getItem('records') || '[]');
        let month = new Date().getMonth() + 1;
        let filterData = total.filter((item: any) => day(item.createdAt).format('MM') === month.toString());
        setRecords(filterData);
    }, []);

    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, records);

    const addRecord = (newRecord: any) => {
        if (parseFloat(newRecord.amount) <= 0) {
          alert('请输入金额');
          return false;
        }
        if (newRecord.tagIds === null) {
          alert('请选择标签');
          return false;
        }
        const record = {...newRecord, createdAt: (new Date()).toISOString(), id: createId().toString()};
        setRecords([...records, record]);
        return true;
    };

    const findRecord = (id: string) => {
        return records.find(item => item.id === id);
    }

    const updateRecord = (id: string, { note, amount }: {note: string, amount: string}) => {
        setRecords(records.map(item => item.id === id ? { ...item, note, amount } : item));
    }

    const delRecord = (id: string) => {
        setRecords(records.filter(tag => tag.id !== id));
    }

    const getStatisticsData = (type: string) => {
        const totalDaylen = day(new Date()).daysInMonth();
        let month = [];
        for(let i = 1; i<= totalDaylen; i++) {
            month.push(i);
        }

        const totalPrice = month.map(date => {
        return records
            .filter(item => item.category === type && day(item.createdAt).format('DD') === date.toString())
            .reduce((total: any, item) => {
                return add(parseFloat(item.amount), total);
            }, 0);
        })
        return { month, totalPrice}
    }

    const getTypeTotalAmount = (type: string) => {
        return records
        .filter(item => item.category === type )
        .reduce((total: any, item) => {
            return add(parseFloat(item.amount), total);
        }, 0);
    }

    const getTagsTotalAmount = (type: string) => {
        let tagArr = [];
        const tagObj = records
            .filter(item => item.category === type)
            .reduce((total: any, item) => {
                if (total[item.tagIds]) {
                    total[item.tagIds]  = add(total[item.tagIds], parseFloat(item.amount))
                } else {
                    total[item.tagIds] = parseFloat(item.amount);
                }
                return total
            }, {});
        for(let key in tagObj) {
            tagArr.push({
                tagid: parseFloat(key),
                amount: tagObj[key]
            })
        }
        return tagArr.sort((a, b) => b.amount - a.amount )
    }

    return {records, addRecord, findRecord, updateRecord, delRecord, getStatisticsData, getTypeTotalAmount, getTagsTotalAmount};
}