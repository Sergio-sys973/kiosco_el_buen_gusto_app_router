"use client"
import { getImagePath } from "@/src/utils"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from 'react-icons/tb'


export default function ImageUploap({ image } : { image: string | undefined}) {

    const[imageUrl, setImageUrl] = useState ('')

  return (
      <CldUploadWidget
          onSuccess={(result, {widget}) => {
              /*console.log(result) */
              if (result.event === 'success') {
                  widget.close()
                  /*//@ts-ignore */
                  //@ts-expect-error
                  setImageUrl(result.info?.secure_url)
              }
          }}
          uploadPreset='oz0wlvty' 
          options={{
              maxFiles: 1,  
          }}
      >
          {({open}) => (
              <>
                  <div className='space-y-2'>
                      <label className='text-slate-800'>Imagen Producto</label>
                      <div
                          className='relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'
                            onClick={() => open()}
                      > 
                            <TbPhotoPlus
                                    size={50}
                            />
                          <p className='text-lg font-semibold'>Agregar Imagen</p>

                          {imageUrl && (
                              <div
                                    className='absolute inset-0 w-full h-full'
                              >
                                  <Image
                                      fill
                                      style={{ objectFit: 'contain'}}
                                      src={imageUrl}
                                      alt='Imagen de Producto'  
                                  />
                               </div>
                            )}
                      </div>
                  </div>  
                  
                  {image && !imageUrl && (
                      <div className='space-y-2'>
                          <label>Imagen Actual:</label>
                          <div className='relative w-64 h-64'>
                              <Image
                                  fill
                                  src={getImagePath(image)}
                                  alt='Imagen Producto'
                                  style={{objectFit: 'contain'}}

                              />
                          </div>
                      </div>
                   )}         
                    <input
                        type='hidden' 
                        name='image'
                        defaultValue={imageUrl ? imageUrl : image}                    
                   />
                </>
         )} 
      </CldUploadWidget>
           
  )
}
