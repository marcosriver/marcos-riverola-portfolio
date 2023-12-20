export const PhotosGalery = (): React.ReactNode => {
  return (
        <>
        <div className="grid grid-cols-3 p-4 gap-4">
            <div className="flex flex-col gap-4">
                <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://pub-2459faede577448399a9c8c322909fc2.r2.dev/alexandra retrato.webp" alt=""/>
                    </div>
                    <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://pub-2459faede577448399a9c8c322909fc2.r2.dev/lanscape.webp" alt=""/>
                    </div>
                    <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                    </div>
                    <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                    </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                    </div>
                    <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                    </div>
                    <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                    </div>
                    <div className="block w-full h-fit">
                        <img className="h-full w-full rounded-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                    </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="block w-full h-fit">
                    <img className="h-full w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                </div>
                <div className="block w-full h-fit">
                    <img className="h-full w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                </div>
            </div>
        </div>
        </>
  )
}
