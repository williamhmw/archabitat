import { useEffect } from 'react'

export default function AdBanner(...props) {
  const { currentPath } = props
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [currentPath])

  return (
    <div key={currentPath}>
      {/*START horizonalAds Google Adsense */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5804128931082564"
        data-ad-slot="7999319809"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      {/* END horizonalAds Google Adsense */}
    </div>
  )
}
