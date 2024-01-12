import Image from "next/image"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false})

export default function Home() {
  return (
    <>
      <header>
        <Image
          src="/images/logo.png"
          width={80}
          height={80}
          alt="logo"
        />
        <h1>VANCOUVER SKYTRAIN</h1>

      </header>

      <DynamicMap/>
    </>
  )
}
