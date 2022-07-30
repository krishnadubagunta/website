import getResume from '../utils/resume'
import {useEffect, useRef} from 'react'

export default function Resume({ resumeUrl }) {
  const viewer = useRef(null)

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: resumeUrl,
        },
        viewer.current,
      )})
  }, [resumeUrl])


  return (
    <div className='h-screen'>
      <div className="webviewer" ref={viewer} />
    </div>
  )
}

export async function getStaticProps() {
  const { fileCollection: { items } } = await getResume()
  const [item] = items
  const { fileUrl: { url } } = item

  return {
    props: { resumeUrl: url },
    revalidate: 5000
  }
}
