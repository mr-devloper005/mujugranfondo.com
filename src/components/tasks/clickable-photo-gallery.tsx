'use client'

import { useState } from 'react'
import { ContentImage } from '@/components/shared/content-image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export function ClickablePhotoGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [open, setOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(images[0] ?? '/placeholder.svg?height=900&width=1400')

  const openImage = (image: string) => {
    setActiveImage(image)
    setOpen(true)
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <button
          type="button"
          onClick={() => openImage(images[0] ?? '/placeholder.svg?height=900&width=1400')}
          className="relative block h-[330px] w-full overflow-hidden bg-slate-100"
          aria-label={`Open ${title} photo`}
        >
          <ContentImage src={images[0] ?? '/placeholder.svg?height=900&width=1400'} alt={title} fill className="object-cover" />
        </button>
        {images.length > 1 ? (
          <div className="grid grid-cols-5 gap-2 border-t border-slate-200 p-3">
            {images.slice(1, 6).map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => openImage(image)}
                className="relative h-20 overflow-hidden rounded-lg border border-slate-200"
                aria-label={`Open ${title} thumbnail`}
              >
                <ContentImage src={image} alt={title} fill className="object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{title} image preview</DialogTitle>
          <div className="relative h-[75vh] w-full overflow-hidden rounded-lg bg-black">
            <ContentImage src={activeImage} alt={title} fill className="object-contain" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
