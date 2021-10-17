import { useState } from 'react';

export const useTags = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    return {
        tags,
        setTags
    }
}