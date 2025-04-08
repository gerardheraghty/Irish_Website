import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ThemesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Téamaí</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore common themes and vocabulary in the Irish language.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Cárbh as duit?</h2>
              <p className="text-muted-foreground mb-4">
              </p>
              <Link href="/themes/carbh-as-duit">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Mo scoil</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Ábhair scoile</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">An deireadh seachtaine</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game" target="_blank">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Caitheamh aimsire</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game" target="_blank">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Mo chairde</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game" target="_blank">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Mo theaghlach</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game" target="_blank">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">An Ghaeltacht</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game" target="_blank">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">An Ghaeilge</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game" target="_blank">
                <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">An samhradh</h2>
              <p className="text-muted-foreground mb-4"></p>
              <Link href="/themes/food-game" target="_blank">
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

