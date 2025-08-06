import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="w-[1000px] min-w-[1000px] bg-white">
        <div className="flex gap-4 py-4 items-stretch">
          <div className="bg-ms-nocturne rounded-xl px-4 py-1 flex items-center gap-2">
            <Image src="/full_logo.png" alt="Logo" width={20} height={20} className="object-contain" />
          </div>
          
          <div className="bg-ms-nocturne rounded-xl px-6 py-2 flex-grow flex items-center justify-start">
            <div className="flex gap-8">
              <a href="mailto:support@coventrylabs.net" className="text-ms-white no-underline text-sm">
                Contact: support@coventrylabs.net
              </a>
            </div>
          </div>
        </div>

        <section className="text-center py-16 bg-gradient-to-br from-ms-nocturne via-ms-eclipse to-ms-blueberry rounded-2xl min-h-[400px] flex flex-col items-center justify-center mb-8">
          <div className="flex justify-center gap-4 px-8 mb-8">
            <Image src="/1.png" alt="App Screenshot 1" width={300} height={450} priority className="max-w-[300px] max-h-[450px] h-auto object-contain rounded-lg" />
            <Image src="/2.png" alt="App Screenshot 2" width={300} height={450} priority className="max-w-[300px] max-h-[450px] h-auto object-contain rounded-lg" />
            <Image src="/3.png" alt="App Screenshot 3" width={300} height={450} priority className="max-w-[300px] max-h-[450px] h-auto object-contain rounded-lg" />
            <Image src="/4.png" alt="App Screenshot 4" width={300} height={450} priority className="max-w-[300px] max-h-[450px] h-auto object-contain rounded-lg" />
          </div>
          <div className="flex gap-4 justify-center">
            <Link 
              href="https://apps.apple.com/us/app/meandering-sleep/id6502964632" 
              className="px-6 py-3 rounded-lg no-underline font-medium flex items-center gap-2 bg-ms-white text-ms-nocturne"
            >
              App Store
            </Link>
            <Link 
              href="https://play.google.com/store/apps/details?id=net.coventry.sleepless&hl=en" 
              className="px-6 py-3 rounded-lg no-underline font-medium flex items-center gap-2 bg-ms-white text-ms-nocturne"
            >
              Play Store
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}