import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function LiteraturePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-200 to-white">
      {/* Header */}
      <header className="py-4 bg-green-700 text-white shadow-md">
        <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">scoláire.ie</h1>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-orange-200 transition-colors">Baile</Link>
            <Link href="/themes" className="hover:text-orange-200 transition-colors">Téamaí</Link>
            <Link href="/literature" className="hover:text-orange-200 transition-colors">Litríocht</Link>
          </nav>
        </div>
      </header>  

      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700">
            <Home className="mr-2 h-4 w-4" />
          Ar ais go baile 
          </Link>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Litríocht</h1>
          <p className="text-xl text-muted-foreground mb-8"></p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Bliain 1 - T1</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/literature/blian_1_t1">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Bliain 2&3 T1</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/literature/blian_2_t1">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Áiseanna measúnaithe</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/literature/aiseanna_meas">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-green-100 bg-white/80 mt-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text font-medium mb-4 md:mb-0">&copy; {new Date().getFullYear()} scoláire.ie</p>
            <div className="flex space-x-6">
              <Link href="/" className="text-green-600 hover:text-green-800 transition-colors">
                Baile
              </Link>
              <Link href="/themes" className="text-green-600 hover:text-green-800 transition-colors">
                Téamaí
              </Link>
              <Link href="/literature" className="text-green-600 hover:text-green-800 transition-colors">
                Litríocht
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

