import useWindowSize from '@/hooks/useWindowSize'

export const useGalleryColumns = ({ length }: { length: number }) => {
  const { width } = useWindowSize()

  let numberOfColumns

  if (width < 700) {
    numberOfColumns = 1
  } else if (width >= 768 && width < 1024) {
    numberOfColumns = 2
  } else {
    numberOfColumns = 3
  }

  const columns = new Array(numberOfColumns).fill({})

  // 25 -->
  const limit = Math.floor(length / columns.length)

  return { columns, limit }
}
