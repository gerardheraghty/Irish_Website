import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-green-700">Fáilte</h1>
              <p className="Stext-xl text-muted-foreground">
              Suíomh difreáil d'fhoghlaimeoirí Gaeilge T1, T2, nuafhoghlaimeoirí agus múinteoirí.
              </p>
            </div>
          </div>
        </section>

        {/* Four Sections */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Themes Section */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Téamaí</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Explore common themes and vocabulary in the Irish language.
                </p>
                <Link href="/themes" className="mt-auto">
                  <Button className="bg-green-600 hover:bg-green-700">Explore Themes</Button>
                </Link>
              </div>

              {/* Literature Section */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Litríocht</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Discover Irish poetry, stories, and literary traditions.
                </p>
                <Link href="/literature" className="mt-auto">
                  <Button className="bg-green-600 hover:bg-green-700">Discover Literature</Button>
                </Link>
              </div>

              {/* Exam Practice Section */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Ag ullmhú don scrúdú</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Prepare for Irish language exams with practice materials.
                </p>
                <Link href="/exam-practice" className="mt-auto">
                  <Button className="bg-green-600 hover:bg-green-700">Practice Exams</Button>
                </Link>
              </div>

              {/* About Section */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Fúinn</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Learn something else here.
                </p>
                <Link href="/about" className="mt-auto">
                  <Button className="bg-green-600 hover:bg-green-700">Fúinn</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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

