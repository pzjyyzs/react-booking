import { useRecords } from "hooks/useRecords";
import React, { useState } from "react";
import MoneyCategory from "./money-category";
import MoneyNote from "./money-note";
import MoneyNumber from "./money-number";
import MoneyTag from "./money-tag";
import { MyLayout } from "./style-components";

export type categoryType = 'pay' | 'revenue';

const defaultFormData = {
  tagIds: 1,
  note: '',
  category: 'pay' as categoryType,
  amount: '0'
}
const Money: React.FunctionComponent = () =>  {
    const [selected, setSelected] = useState(defaultFormData)

    const {records, addRecord} = useRecords();
    
    const onChange = (obj: Partial<typeof selected>) => {
      setSelected({ ...selected, ...obj })
    }

    const submit = () => {
      if (addRecord(selected)) {
        alert('保存成功');
        setSelected(defaultFormData);
      }
    };

    return (
      <MyLayout>
         <MoneyCategory
          value={selected.category}
          onChange={(category) => onChange({category})}
        />
        
        <MoneyTag 
          value={selected.tagIds}
          category={selected.category}
          onChange={(tags) => onChange({tagIds: tags})}
        />

        <MoneyNote
          value={selected.note}
          onChange={(note) => onChange({note})}
        />

       

        <MoneyNumber
          value={selected.amount}
          onChange={(amount) => onChange({amount})}
          onOk={submit}
        />

      </MyLayout>
    )
  }

  export default Money