import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function LiteraturePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-200 to-white">
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
              <h2 className="text-2xl font-bold mb-4 text-green-700">Bliain 1 - Téarma 1</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/literature/blian_1_t1">
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

      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cianas Website
          </p>
        </div>
      </footer>
    </div>
  )
}

