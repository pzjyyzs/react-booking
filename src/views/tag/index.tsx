import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecords } from "hooks/useRecords";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createHashHistory }  from 'history'; 
import { ButtonGroup, InputTitle, TagHeader } from "./style-component";
import { useTags } from "hooks/useTags";
import { MoneyNoteStyle } from "views/money/style-components";

type Params = {
    id: string
}
const Tag: React.FunctionComponent<any> = (props) => {
    let { id } = useParams<Params>();
    const { findRecord, updateRecord, delRecord } = useRecords();
    const { findTag } = useTags();
    const record = findRecord(id);
    const tag = record ? findTag(record.tagIds) : null;
    const [obj, setObj] = useState({ amount: record ? record.amount : '', note: ''});
    
    const onPushBack = () => {
        createHashHistory().goBack();
    }

    const onInputChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setObj({
            ...obj,
            [key]: e.target.value
        })
    }

    const onUpdateRecord = () => {
        if (record) {
            updateRecord(record.id, obj);
            onPushBack();
        }
    }

    const onDeleteRecord = () => {
        if (record) {
            delRecord(record.id);
            onPushBack();
        }
    }

    return (
        <>
            <TagHeader>
                <button onClick={onPushBack}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </button>

                {tag && (
                    <div className='tag-icon'>
                        <FontAwesomeIcon icon={ tag.icon }></FontAwesomeIcon>
                        { tag.name }
                    </div>
                )}
                <span className='empty'></span>
            </TagHeader>

            <div>
                <InputTitle>金额</InputTitle>
                <MoneyNoteStyle>
                    <label>
                        <input 
                            type="number"
                            value={obj.amount}
                            onChange={(e) => onInputChange('amount', e)}
                        />
                    </label>
                </MoneyNoteStyle>

                <InputTitle>备注</InputTitle>
                <MoneyNoteStyle>
                    <label>
                        <input 
                            type="text" 
                            value={obj.note}
                            onChange={(e) => onInputChange('note', e)}
                        />
                    </label>
                </MoneyNoteStyle>
            </div>

            <ButtonGroup>
                <button className='update' onClick={onUpdateRecord}>修改</button>
                <button className='del' onClick={onDeleteRecord}>删除</button>
            </ButtonGroup>
        </>
       

    )
}

export default Tag;