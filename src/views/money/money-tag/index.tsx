import React, { useState } from "react";
import { MoneyTagStyle } from "../style-components";

const MoneyTag: React.FC<any> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const [selectedTags, setSelectedTags] = useState<string[]>([])
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
            setSelectedTags(filterArr);
        } else {
            setSelectedTags([...selectedTags, tag])
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