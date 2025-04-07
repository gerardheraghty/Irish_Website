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

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Themes</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore common themes and vocabulary in the Irish language.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Family / Clann</h2>
              <p className="text-muted-foreground mb-4">
                Learn vocabulary related to family members and relationships.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Home / Baile</h2>
              <p className="text-muted-foreground mb-4">Vocabulary about the home, rooms, and household items.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Food / Bia</h2>
              <p className="text-muted-foreground mb-4">Learn words for different foods, meals, and cooking.</p>
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

