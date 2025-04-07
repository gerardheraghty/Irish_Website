import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">About</h1>
          <p className="text-xl text-muted-foreground mb-8">Learn more about this website and the Irish language.</p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-green-700">About This Website</h2>
              <p className="text-muted-foreground">
                This website was created by Cian to help people learn and practice the Irish language. Whether you're a
                beginner or looking to improve your skills, we have resources for all levels.
              </p>
              <p className="text-muted-foreground">
                Our goal is to make learning Irish accessible, engaging, and enjoyable for everyone.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-green-700">The Irish Language</h2>
              <p className="text-muted-foreground">
                Irish (Gaeilge) is a Goidelic language of the Celtic language family. It is one of the official
                languages of Ireland and an official language of the European Union.
              </p>
              <p className="text-muted-foreground">
                Despite being the national language of Ireland, Irish is spoken as a first language by a small minority
                of Irish people. However, it is also spoken as a second language by a larger group, with 40% of people
                in the Republic of Ireland claiming to have some ability to speak the language.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-green-100">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Contact Us</h2>
            <p className="text-muted-foreground mb-6">Have questions or suggestions? We'd love to hear from you!</p>
            <Button className="bg-green-600 hover:bg-green-700">Send Message</Button>
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

