import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";
import { createId } from "lib/createId";

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
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
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

    return {records, addRecord, findRecord, updateRecord, delRecord};
}