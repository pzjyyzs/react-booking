import React, { useState } from "react";
import { MoneyTagStyle } from "../style-components";
import { useTags } from './../../../hooks/useTags';

type TagProps = {
    value: string[],
    onChange: (selected: string[]) => void;
}
const MoneyTag: React.FC<TagProps> = (props) => {
    const selectedTags = props.value;
    const { tags, setTags } = useTags();
    const onAddTag = () => {
        const x = window.prompt('新的标签为');
        if (x !== null && tags.indexOf(x) === -1) {
            setTags([...tags, x])
        }
    }

    const onToggleTag = (tag: string) => {
        const isSelect = selectedTags.indexOf(tag);
        if (isSelect > -1) {
            const filterArr = selectedTags.filter(item => item !== tag);
            props.onChange(filterArr);
        } else {
            props.onChange([...selectedTags, tag])
        }
    }

    return (
        <MoneyTagStyle>
            <ol>
                {
                    tags.map(item => {
                        return (
                            <li 
                                key={item} 
                                onClick={() => onToggleTag(item)}
                                className={selectedTags.indexOf(item) > -1 ? 'selected' : ''}
                            >{item}</li>
                        )
                    })
                }
          </ol>
          <button onClick={onAddTag}>新增标签</button>
        </MoneyTagStyle>
    )
}

export default MoneyTag;