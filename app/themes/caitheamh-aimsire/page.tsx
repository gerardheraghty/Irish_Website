import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function themes1() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-200 to-white">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link href="/themes" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ar ais chuig na téamaí
          </Link>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Plan for this Unit</h1>
          <p className="text-xl text-muted-foreground mb-8">
          <span className="font-bold text-black">1.</span> Éist le comhrá<br />
  <span className="font-bold text-black">2.</span> Stór focal<br />
  <span className="font-bold text-black">3.</span> Gramadach: An Aimsir láithreach<br />
  <span className="font-bold text-black">4.</span> Ceachtanna aonaracha agus punainne: Ceachtanna féideartha don rang.
          </p>

          <div className="flex justify-center mb-8">
            <Link href="/themes/caitheamh-aimsire/section-1">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Unit
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/themes/caitheamh-aimsire/section-1" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow h-full">
                <h2 className="text-2xl font-bold mb-4 text-green-700">1. Éist le comhrá</h2>
                <p className="text-muted-foreground mb-4"></p>
                <div className="mt-auto pt-4">
                  <Button variant="outline" className="w-full">
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/themes/caitheamh-aimsire/section-2" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow h-full">
                <h2 className="text-2xl font-bold mb-4 text-green-700">2.Stór focal</h2>
                <p className="text-muted-foreground mb-4"></p>
                <div className="mt-auto pt-4">
                  <Button variant="outline" className="w-full">
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/themes/caitheamh-aimsire/section-3" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow h-full">
                <h2 className="text-2xl font-bold mb-4 text-green-700">3.Gramadach: An Aimsir láithreach</h2>
                <p className="text-muted-foreground mb-4"></p>
                <div className="mt-auto pt-4">
                  <Button variant="outline" className="w-full">
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>
            <Link href="/themes/caitheamh-aimsire/section-4" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow h-full">
                <h2 className="text-2xl font-bold mb-4 text-green-700">4. Ceachtanna aonaracha agus punainne</h2>
                <p className="text-muted-foreground mb-4"></p>
                <div className="mt-auto pt-4">
                  <Button variant="outline" className="w-full">
                    Go to Section
                  </Button>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </main>

      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cianas Website.
          </p>
        </div>
      </footer>
    </div>
  )
}
