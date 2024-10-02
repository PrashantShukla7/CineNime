import React from 'react'

const Dropdown = ({title, options, func}) => {
  return (
    <div>
        <select defaultValue="0" onChange={func} className='h-full outline-none border-none rounded-md bg-[#0f101fbd] text-white w-40 p-3 py-2'>
            <option value="0" disabled className='text-zinc-300'>{title}</option>
            {options.map((option, index) => (
                <option key={index} value={option.id}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown