import React, { useState } from "react";
import MoneyCategory from "./money-category";
import MoneyNote from "./money-note";
import MoneyNumber from "./money-number";
import MoneyTag from "./money-tag";
import { MyLayout } from "./style-components";

type categoryType = 'pay' | 'revenue';
const Money: React.FunctionComponent = () =>  {
    const [selected, setSelected] = useState({
      tags: [] as string[],
      note: '',
      category: 'revenue' as categoryType,
      amount: '0'
    })

    const onChange = (obj: Partial<typeof selected>) => {
      setSelected({ ...selected, ...obj })
    }

    return (
      <MyLayout>
        <MoneyTag 
          value={selected.tags}
          onChange={(tags) => onChange({tags})}
        />

        <MoneyNote
          value={selected.note}
          onChange={(note) => onChange({note})}
        />

        <MoneyCategory
          value={selected.category}
          onChange={(category) => onChange({category})}
        />

        <MoneyNumber
          value={selected.amount}
          onChange={(amount) => onChange({amount})}
          onOk={() => '123'}
        />

      </MyLayout>
    )
  }

  export default Money