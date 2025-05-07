"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function AssignmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/themes/carbh-as-duit" className="inline-flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ar ais chuig an bPlean Aonad
            </Link>
            <div className="text-sm text-muted-foreground">Section 4 of 4</div>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Ceachtanna aonaracha agus punainne</h1>

          <p className="text-xl text-muted-foreground mb-8">
            Críochnaigh na tascanna seo a leanas bunaithe ar an gcomhrá.
          </p>

          {/* Assignment Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border rounded-md p-6 bg-gray-50">
              <div className="space-y-6">
                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">1.</span>
                  <p>Obair bheirte. Scríobh comhrá cosúil le Máire agus Sinéad, bunaithe ar d'áit chónaithe féin. Is
                  féidir é a scríobh, físeán a chrúthú nó comhad fuaime a thaifead.</p>
                </div>
                
                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">2.</span>
                  <p>Cruthaigh fógra ar líne do d'áit chónaithe féin/d'áit chónaithe i do shamhlaíocht. Is féidir pictiúir a
                  chur leis an téacs.</p>
                </div>
                
                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">3.</span>
                  <p>Freagar ceisteanna simplí ar an gcomhrá.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/themes/carbh-as-duit/section-3">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Section
              </Button>
            </Link>

            <Link href="/themes/carbh-as-duit">
              <Button className="bg-green-600 hover:bg-green-700 flex items-center">
                Ar ais chuig an bPlean
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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