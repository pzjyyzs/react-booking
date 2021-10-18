import React from 'react';
import { MoneyNoteStyle } from '../style-components';

type NoteProps = {
    value: string;
    onChange: (note: string) => void
}
const MoneyNote: React.FC<NoteProps> = (props) => {
    return (
        <MoneyNoteStyle>
            <label>
            <input 
                type="text" 
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                placeholder='备注'
            />
          </label>
        </MoneyNoteStyle>
    )
}

export default MoneyNote;