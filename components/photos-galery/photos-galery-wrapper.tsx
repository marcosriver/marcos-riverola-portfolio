import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3'
import { PhotosGalery } from './photos-galery'

export const PhotosGaleryWrapper = async () => {
  const S3 = new S3Client(
    {
      region: 'auto',
      endpoint: `https://${process.env.NEXT_PUBLIC_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
      }
    }
  )

  const list = await S3.send(new ListObjectsV2Command({ Bucket: `${process.env.NEXT_PUBLIC_PHOTOGRAPY_PORFOLIO_BUCKET_NAME}` }))

  return (<PhotosGalery list={list.Contents}/>)
}
