import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LiteraturePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Literature</h1>
          <p className="text-xl text-muted-foreground mb-8">Discover Irish poetry, stories, and literary traditions.</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Poetry / Filíocht</h2>
              <p className="text-muted-foreground mb-4">Explore traditional and modern Irish language poetry.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Read Poetry</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Stories / Scéalta</h2>
              <p className="text-muted-foreground mb-4">Read traditional Irish stories and folktales.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Read Stories</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Proverbs / Seanfhocail</h2>
              <p className="text-muted-foreground mb-4">Learn traditional Irish proverbs and their meanings.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore Proverbs</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Modern Authors / Údair Nua-Aimseartha</h2>
              <p className="text-muted-foreground mb-4">
                Discover contemporary Irish language authors and their works.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Discover Authors</Button>
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

