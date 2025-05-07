import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, GraduationCap, Castle } from "lucide-react"

export default function Blian1T1() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-200 via-orange-100 to-white">
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

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Breadcrumb Navigation */}
          <Link href="/literature" className="inline-flex items-center mb-8 text-green-600 hover:text-green-700 transition-colors font-medium text-lg group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            Ar ais chuig an litríocht
          </Link>

          {/* Title Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Bliain 2&3 T1: Litríocht</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Fáilte go dtí roinn na litríochta don chéad bhliain. Roghnaigh ceann de na codanna thíos chun tús a chur le d'fhoghlaim.</p>
          </div>

          {/* Content Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Link href="/literature/blian_2_t1/urscealta" className="block group">
              <div className="p-8 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full opacity-70"></div>
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-green-700 group-hover:text-green-800 transition-colors">1. Úrscéalta</h2>
                <p className="text-gray-600 mb-6">Could put some small description here.</p>
                <div className="mt-auto pt-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Téigh go dtí an Roinn
                  </Button>
                </div>
              </div>
            </Link>

          </div>

        </div>
      </main>


      {/* Footer */}
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