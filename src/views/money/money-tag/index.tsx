import React from "react";
import { categoryType } from "..";
import { MoneyTagStyle, TagIcon } from "../style-components";
import { useTags } from './../../../hooks/useTags';

type TagProps = {
    value: number,
    category: categoryType,
    onChange: (selected: number) => void;
}
const MoneyTag: React.FC<TagProps> = (props) => {
    const selectedTags = props.value;
    const { getTag } = useTags();
    const tags = getTag(props.category);
    const onToggleTag = (tag: number) => {
        const isSelect = selectedTags === tag;
        if (!isSelect) {
            props.onChange(tag)
        }
    }

    return (
        <MoneyTagStyle>
            <div>
                {
                    tags.map(item => {
                        return (
                            <div 
                                key={item.id} 
                                onClick={() => onToggleTag(item.id)}
                                className={selectedTags === item.id  ? 'selected' : ''}
                            >
                                <TagIcon icon={ item.icon }></TagIcon>
                                {item.name}
                            </div>
                        )
                    })
                }
          </div>
        </MoneyTagStyle>
    )
}

export default MoneyTag;