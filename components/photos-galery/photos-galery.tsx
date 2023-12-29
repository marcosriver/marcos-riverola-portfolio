'use client'

import { useGalleryColumns } from './useGalleryColumns'

export const PhotosGalery = ({ list }: { list: [] }) => {
  const { columns, limit } = useGalleryColumns({ length: list.length })

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
        {columns.map((_, index) => {
          return (
                <div key={index} className="flex flex-col gap-4">
                    {list.slice(index * limit, (index * limit) + limit).map((image, i) => {
                      return (
                        <div key={index + i} className="block w-full h-fit">
                            <img loading="lazy" className="h-full w-full rounded-lg " src={`${process.env.NEXT_PUBLIC_IMAGE_URL + image.Key}`} alt=""/>
                        </div>
                      )
                    })}
                </div>
          )
        })}
        </div>

  )
}
