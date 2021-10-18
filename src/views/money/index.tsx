import React, { useState } from "react";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { createHashHistory }  from 'history'; 
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
const Money: React.FunctionComponent = (props) =>  {
    const [selected, setSelected] = useState(defaultFormData)
    const { getTag } = useTags()
    const {addRecord} = useRecords();
    
    const onChange = (obj: Partial<typeof selected>) => {
      setSelected({ ...selected, ...obj })
    }

    const layoutChange = (obj: Partial<typeof selected>) => {
      const tags = getTag(obj.category!)
      obj.tagIds = tags[0].id;
      onChange(obj);
    }

    const submit = () => {
      if (addRecord(selected)) {
        setSelected(defaultFormData);
        createHashHistory().push('/')
      }
    };

    return (
      <MyLayout>
         <MoneyCategory
          value={selected.category}
          onChange={(category) => layoutChange({category})}
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