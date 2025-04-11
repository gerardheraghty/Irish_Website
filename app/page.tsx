import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-200 to-white">
      <main className="flex-1">
        {/* Hero Section with Updated Fonts and Celtic Symbol */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-green-700 celtic-font">Fáilte</h1>
                <span className="emoji" role="img" aria-label="Shamrock" style={{ fontSize: '50px' }}>☘️</span>
              </div>
              <p className="text-xl text-muted-foreground bubbly-font">
                Suíomh difreáilte d'fhoghlaimeoirí Gaeilge T1, T2, nuafhoghlaimeoirí agus múinteoirí.
              </p>
            </div>
          </div>
        </section>

        {/* Four Sections as Copybooks */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Themes Section */}
              <Link href="/themes" className="block">
                <div className="copybook-container">
                  <div className="copybook">
                    <div className="spiral"></div>
                    <div className="copybook-content">
                      <h2 className="text-3xl font-bold text-green-700 mb-4 bubbly-font">Téamaí</h2>
                      <p className="text-center text-muted-foreground mb-6 bubbly-font">
                        Explore common themes and vocabulary in the Irish language.
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700 bubbly-font">Explore Themes</Button>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Literature Section */}
              <Link href="/literature" className="block">
                <div className="copybook-container">
                  <div className="copybook">
                    <div className="spiral"></div>
                    <div className="copybook-content">
                      <h2 className="text-3xl font-bold text-green-700 mb-4 bubbly-font">Litríocht</h2>
                      <p className="text-center text-muted-foreground mb-6 bubbly-font">
                        Discover Irish poetry, stories, and literary traditions.
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700 bubbly-font">Discover Literature</Button>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Exam Practice Section */}
              <Link href="/exam-practice" className="block">
                <div className="copybook-container">
                  <div className="copybook">
                    <div className="spiral"></div>
                    <div className="copybook-content">
                      <h2 className="text-3xl font-bold text-green-700 mb-4 bubbly-font">Ag ullmhú don scrúdú</h2>
                      <p className="text-center text-muted-foreground mb-6 bubbly-font">
                        Prepare for Irish language exams with practice materials.
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700 bubbly-font">Practice Exams</Button>
                    </div>
                  </div>
                </div>
              </Link>

              {/* About Section */}
              <Link href="/about" className="block">
                <div className="copybook-container">
                  <div className="copybook">
                    <div className="spiral"></div>
                    <div className="copybook-content">
                      <h2 className="text-3xl font-bold text-green-700 mb-4 bubbly-font">Fúinn</h2>
                      <p className="text-center text-muted-foreground mb-6 bubbly-font">Learn something else here.</p>
                      <Button className="bg-green-600 hover:bg-green-700 bubbly-font">Fúinn</Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Cianas Website</p>
        </div>
      </footer>
    </div>
  )
}
