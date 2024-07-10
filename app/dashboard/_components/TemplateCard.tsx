import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

interface TemplateCardProps extends TEMPLATE {}

function TemplateCard({ name, desc, icon, slug }: TemplateCardProps) {
  return (
    <Link href={'/dashboard/content/' + slug}>
      <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image
          src={icon}
          alt={name}  // Updated to use the name for better accessibility
          width={50}
          height={50}
          priority   // Added priority prop
        />
        <h2 className='font-medium text-lg'>{name}</h2>
        <p className='text-gray-500 line-clamp-3'>{desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard
