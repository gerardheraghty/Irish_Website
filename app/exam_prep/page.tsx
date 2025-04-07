import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ExamPracticePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link href="/" className="inline-flex items-center mb-6 text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Exam Practice</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Prepare for Irish language exams with practice materials.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Junior Cycle</h2>
              <p className="text-muted-foreground mb-4">Practice materials for Junior Cycle Irish exams.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Start Practice</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Leaving Certificate</h2>
              <p className="text-muted-foreground mb-4">Comprehensive practice for Leaving Certificate Irish exams.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Start Practice</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">TEG Exams</h2>
              <p className="text-muted-foreground mb-4">
                Practice for Teastas Eorpach na Gaeilge (European Certificate in Irish).
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Start Practice</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Grammar Exercises</h2>
              <p className="text-muted-foreground mb-4">Practice Irish grammar with interactive exercises.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Start Exercises</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Vocabulary Tests</h2>
              <p className="text-muted-foreground mb-4">Test your Irish vocabulary knowledge.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Start Tests</Button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Listening Practice</h2>
              <p className="text-muted-foreground mb-4">Improve your Irish listening skills with audio exercises.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Start Listening</Button>
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

