"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, RefreshCw, Check, Home } from "lucide-react"

// Define the correct answers
const correctAnswers = {
  blank1: "ort",
  blank2: "orm",
  blank3: "orthu",
  blank4: "uirthi",
  blank5: "air",
  blank6: "oraibh",
}

export default function TeamaiU1S2Page2() {
  const [answers, setAnswers] = useState([])
  const [blanks, setBlanks] = useState({
    blank1: "______",
    blank2: "______",
    blank3: "______",
    blank4: "______",
    blank5: "______",
    blank6: "______",
  })
  const [blankToAnswerMap, setBlankToAnswerMap] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
    blank6: "",
  })
  const [result, setResult] = useState("")
  const [showResult, setShowResult] = useState(false)
  // Track completed sentences (for progress bar)
  const [completed, setCompleted] = useState(false)

  // Initialize the game
  useEffect(() => {
    initAnswerBubbles()
  }, [])

  // Initialize answer bubbles in a random order
  function initAnswerBubbles() {
    const answerArray = Object.values(correctAnswers)
    // Shuffle the answers
    const shuffledAnswers = [...answerArray].sort(() => Math.random() - 0.5)
    setAnswers(shuffledAnswers)
  }

  // Select an answer and place it in the next available blank
  function selectAnswer(answer, index) {
    // Find the first empty blank
    const blankId = Object.keys(blanks).find((id) => blanks[id] === "______")

    if (blankId) {
      // Update the blank with the selected answer
      setBlanks((prev) => ({
        ...prev,
        [blankId]: answer,
      }))

      // Store which answer was used for which blank
      setBlankToAnswerMap((prev) => ({
        ...prev,
        [blankId]: `answer-${index}`,
      }))

      // Remove the answer from the available options
      setAnswers((prev) => prev.map((a, i) => (i === index ? "" : a)))
    }
  }

  // Remove an answer from a blank and make it available again
  function removeAnswer(blankId) {
    if (blanks[blankId] !== "______") {
      // Get the answer that was in this blank
      const answer = blanks[blankId]

      // Get the index of the answer
      const answerIndex = Number.parseInt(blankToAnswerMap[blankId].split("-")[1])

      // Reset the blank
      setBlanks((prev) => ({
        ...prev,
        [blankId]: "______",
      }))

      // Reset the blank to answer mapping
      setBlankToAnswerMap((prev) => ({
        ...prev,
        [blankId]: "",
      }))

      // Make the answer available again
      setAnswers((prev) => {
        const newAnswers = [...prev]
        newAnswers[answerIndex] = answer
        return newAnswers
      })
    }
  }

  // Check if all answers are correct
  function checkAnswers() {
    let allCorrect = true

    for (const blankId in correctAnswers) {
      if (blanks[blankId] !== correctAnswers[blankId]) {
        allCorrect = false
        break
      }
    }

    setShowResult(true)

    if (allCorrect) {
      setResult("Comhghairdeas! Tá na freagraí go léir ceart agat! (Congratulations, you got all answers correct!)")
      setCompleted(true)
    } else {
      setResult("Tá roinnt freagraí mícheart. Bain triail eile as. (Some answers are incorrect. Please try again.)")
    }
  }

  // Reset the game
  function resetGame() {
    setBlanks({
      blank1: "______",
      blank2: "______",
      blank3: "______",
      blank4: "______",
      blank5: "______",
      blank6: "______",
    })
    setBlankToAnswerMap({
      blank1: "",
      blank2: "",
      blank3: "",
      blank4: "",
      blank5: "",
      blank6: "",
    })
    setShowResult(false)
    setCompleted(false)
    initAnswerBubbles()
  }

  // Calculate progress percentage
  const progressPercentage = completed ? 100 : 0

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/themes/carbh-as-duit" className="inline-flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ar ais chuig an bPlean Aonad
            </Link>
            <div className="text-sm text-muted-foreground">Section 2 of 4</div>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Gramadach B - forainmneacha réamhfhoclacha (prepositional pronouns)</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
  <h2 className="text-2xl font-bold mb-4 text-green-700">Forainmneacha Réamhfhoclacha</h2>
  
  <p className="text-lg mb-6">
    De ghnáth úsáidtear na forainmneacha réamhfhoclacha (prepositional pronouns) chun mothúcháin
    agus rudaí a tharlaíonn duit/atá bainteach leat nó daoine eile a léiriú. M.sh <span className="font-semibold">Tá fearg orm</span>. (direct
    translation: Anger is upon me).
  </p>
  
  <div className="bg-green-50 p-5 rounded-md border border-green-100">
    <h3 className="text-xl font-bold mb-4 text-green-700">An Réamhfhocal "Ar"</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-3 bg-white rounded-md border border-green-200 flex items-center">
        <div className="flex-1">
          <span className="font-medium">Ar + mé</span>
          <span className="text-gray-500 text-sm block">(on + I/me)</span>
        </div>
        <span className="text-green-700 font-bold">orm</span>
      </div>
      
      <div className="p-3 bg-white rounded-md border border-green-200 flex items-center">
        <div className="flex-1">
          <span className="font-medium">Ar + tú</span>
          <span className="text-gray-500 text-sm block">(on + you)</span>
        </div>
        <span className="text-green-700 font-bold">ort</span>
      </div>
      
      <div className="p-3 bg-white rounded-md border border-green-200 flex items-center">
        <div className="flex-1">
          <span className="font-medium">Ar + sé</span>
          <span className="text-gray-500 text-sm block">(on + he/him)</span>
        </div>
        <span className="text-green-700 font-bold">air</span>
      </div>
      
      <div className="p-3 bg-white rounded-md border border-green-200 flex items-center">
        <div className="flex-1">
          <span className="font-medium">Ar + sí</span>
          <span className="text-gray-500 text-sm block">(on + she/her)</span>
        </div>
        <span className="text-green-700 font-bold">uirthi</span>
      </div>
      
      <div className="p-3 bg-white rounded-md border border-green-200 flex items-center">
        <div className="flex-1">
          <span className="font-medium">Ar + sinn</span>
          <span className="text-gray-500 text-sm block">(on + we/us)</span>
        </div>
        <span className="text-green-700 font-bold">orainn</span>
      </div>
      
      <div className="p-3 bg-white rounded-md border border-green-200 flex items-center">
        <div className="flex-1">
          <span className="font-medium">Ar + sibh</span>
          <span className="text-gray-500 text-sm block">(on + you plural)</span>
        </div>
        <span className="text-green-700 font-bold">oraibh</span>
      </div>
      
      <div className="p-3 bg-white rounded-md border border-green-200 flex items-center">
        <div className="flex-1">
          <span className="font-medium">Ar + siad</span>
          <span className="text-gray-500 text-sm block">(on + they/them)</span>
        </div>
        <span className="text-green-700 font-bold">orthu</span>
      </div>
    </div>

  </div>
</div>

<h3 className="text-xl font-bold mb-4 text-green-700">Cleachtadh</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Complete the sentences with the correct prepositional pronouns.<br />
            Click on the words and place them in the correct blanks.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">

            {/* Exercise area */}
            <div className="p-6 bg-gray-50 rounded-lg mb-6">
              <div className="mb-6">
                <p className="text-lg mb-4">
                  1. Cá bhfuil cónaí{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank1 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank1")}
                  >
                    {blanks.blank1}
                  </span>{" "}
                  (tú)?.
                </p>

                <p className="text-lg mb-4">
                  2. Tá cónaí{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank2 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank2")}
                  >
                    {blanks.blank2}
                  </span>{" "}
                  (mé) faoin tuath.
                </p>

                <p className="text-lg mb-4">
                  3. Tá cónaí{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank3 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank3")}
                  >
                    {blanks.blank3}
                  </span>{" "}
                  i gceantar uirbeach. 
                </p>

                <p className="text-lg mb-4">
                  4. Tá cónaí{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank4 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank4")}
                  >
                    {blanks.blank4}
                  </span>{" "}
                  (a/she) ar an gceathrú urlár den árasán.
                </p>

                <p className="text-lg mb-4">
                  5. Tá cónaí{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank5 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank5")}
                  >
                    {blanks.blank5}
                  </span>{" "}
                  (a/he) i dteach scoite sa chathair. 
                </p>

                <p className="text-lg mb-4">
                  6. Tá áthas{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank6 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank6")}
                  >
                    {blanks.blank6}
                  </span>{" "}
                  (sibh) a bheith i bhur gcónaí faoin tuath. 
                </p>

              </div>

              {/* Available words */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Available words:</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {answers.map(
                    (answer, index) =>
                      answer && (
                        <div
                          key={`answer-${index}`}
                          className="px-3 py-1 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 transition-colors"
                          onClick={() => selectAnswer(answer, index)}
                        >
                          {answer}
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>

            {/* Feedback area */}
            {showResult && (
              <div className={`mb-6 p-4 ${result.includes("Comhghairdeas") ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"} rounded-md`}>
                <p className="font-medium flex items-center">
                  {result.includes("Comhghairdeas") && <Check className="h-5 w-5 mr-2" />}
                  {result}
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={checkAnswers}
                className="bg-green-600 hover:bg-green-700"
                disabled={Object.values(blanks).includes("______") || showResult && result.includes("Comhghairdeas")}
              >
                Check Answer
              </Button>

              <Button
                variant="outline"
                onClick={resetGame}
                className="flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Link href="/themes/carbh-as-duit/section-2-a">
              <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Section
              </Button>
            </Link>

            <Link href="/themes/carbh-as-duit/section-2-c">
              <Button className="bg-green-600 hover:bg-green-700 flex items-center">
                Next Section
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