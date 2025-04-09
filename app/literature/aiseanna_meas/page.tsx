import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function blian_1_t1() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link href="/literature" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ar ais chuig an litríocht
          </Link>


          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/literature/aiseanna_meas/staidear_comp" className="block">
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow h-full">
                <h2 className="text-2xl font-bold mb-4 text-green-700">1. staidéar comparáideach</h2>
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
