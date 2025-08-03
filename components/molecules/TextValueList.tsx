import React from 'react'
import TextValue from '../atoms/TextValue';

const TextValueList = ({ items }: { items: Array<{ label: string; value: string | number; link?: string; linkType?: "audio" | "video" | "image" | "url" }> }) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      {items.map((item, index) => (
        <TextValue key={index} label={item.label} value={item.value} link={item.link} linkType={item.linkType} />
      ))}
    </div>
  )
}

export default TextValueList