import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, BookOpen, Pencil, Headphones, GraduationCap } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Themes1() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-white">
      {/* Header */}
      <header className="py-4 bg-green-700 text-white shadow-lg sticky top-0 z-10">
        <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-orange-200 transition-all duration-200"
          >
            scoláire.ie
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="font-medium hover:text-orange-200 transition-colors duration-200">
              Baile
            </Link>
            <Link href="/themes" className="font-medium hover:text-orange-200 transition-colors duration-200">
              Téamaí
            </Link>
            <Link href="/literature" className="font-medium hover:text-orange-200 transition-colors duration-200">
              Litríocht
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-green-600">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-green-700 text-white border-none">
              <div className="flex flex-col space-y-6 mt-10">
                <Link href="/" className="text-xl font-medium hover:text-orange-200 transition-colors">
                  Baile
                </Link>
                <Link href="/themes" className="text-xl font-medium hover:text-orange-200 transition-colors">
                  Téamaí
                </Link>
                <Link href="/literature" className="text-xl font-medium hover:text-orange-200 transition-colors">
                  Litríocht
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12 max-w-5xl mx-auto">
          <Link
            href="/themes"
            className="inline-flex items-center mb-8 text-green-700 hover:text-green-800 font-medium group transition-all duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Ar ais chuig na téamaí
          </Link>

          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-green-800 leading-tight">
              Plan for this Unit
            </h1>
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-green-100">
              <ol className="text-lg space-y-3 text-left">
                <li className="flex items-start">
                  <span className="font-bold text-green-700 mr-2">1.</span>
                  <span>Éist le comhrá</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-700 mr-2">2.</span>
                  <span>Stór focal</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-700 mr-2">3.</span>
                  <span>Gramadach: An Aimsir láithreach</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-700 mr-2">4.</span>
                  <span>Ceachtanna aonaracha agus punainne: Ceachtanna féideartha don rang.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Link href="/themes/caitheamh-aimsire/section-1">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
              >
                Start Unit
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/themes/caitheamh-aimsire/section-1" className="block group">
              <div className="p-8 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-xl transition-all duration-200 h-full group-hover:border-green-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg mr-3">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-700">1. Éist le comhrá</h2>
                </div>
                <p className="text-gray-600 mb-6">Cleacht do chluastuiscint le comhráite.</p>
                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-700 hover:bg-green-50 group-hover:border-green-300"
                  >
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/themes/caitheamh-aimsire/section-2" className="block group">
              <div className="p-8 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-xl transition-all duration-200 h-full group-hover:border-green-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg mr-3">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-700">2. Stór focal</h2>
                </div>
                <p className="text-gray-600 mb-6">Foghlaim an foclóir bunúsach don aonad seo.</p>
                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-700 hover:bg-green-50 group-hover:border-green-300"
                  >
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/themes/caitheamh-aimsire/section-3" className="block group">
              <div className="p-8 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-xl transition-all duration-200 h-full group-hover:border-green-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg mr-3">
                    <Pencil className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-700">3. Gramadach: An Aimsir láithreach</h2>
                </div>
                <p className="text-gray-600 mb-6">Foghlaim rialacha gramadaí tábhachtacha.</p>
                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-700 hover:bg-green-50 group-hover:border-green-300"
                  >
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/themes/caitheamh-aimsire/section-4" className="block group">
              <div className="p-8 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-xl transition-all duration-200 h-full group-hover:border-green-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg mr-3">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-700">4. Ceachtanna aonaracha agus punainne</h2>
                </div>
                <p className="text-gray-600 mb-6">Déan cleachtaí praiticiúla don rang.</p>
                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-700 hover:bg-green-50 group-hover:border-green-300"
                  >
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-green-100 bg-white/80 mt-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-700 font-medium mb-4 md:mb-0">&copy; {new Date().getFullYear()} scoláire.ie</p>
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