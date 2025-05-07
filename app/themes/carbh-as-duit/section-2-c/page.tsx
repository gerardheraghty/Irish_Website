"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, RefreshCw, Check, Home } from "lucide-react"

// Define the correct answers
const correctAnswers = {
  blank1: "chónaí",
  blank2: "cónaí",
  blank3: "cónaí",
  blank4: "cónaí",
  blank5: "gcónaí",
  blank6: "gcónaí",
  blank7: "gcónaí",
}

export default function TeamaiU1S2Page3() {
  const [answers, setAnswers] = useState([])
  const [blanks, setBlanks] = useState({
    blank1: "______",
    blank2: "______",
    blank3: "______",
    blank4: "______",
    blank5: "______",
    blank6: "______",
    blank7: "______",
  })
  const [blankToAnswerMap, setBlankToAnswerMap] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
    blank6: "",
    blank7: "",
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
      blank7: "______",
    })
    setBlankToAnswerMap({
      blank1: "",
      blank2: "",
      blank3: "",
      blank4: "",
      blank5: "",
      blank6: "",
      blank7: "",
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

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Gramadach C - Aidiacht Shealbhach (possessive adjectives)</h1>
          

<h3 className="text-xl font-bold mb-4 text-green-700"></h3>
          <p className="text-xl text-muted-foreground mb-8">
            Complete the sentences with the correct possessive adjectives.<br />
            Click on the words and place them in the correct blanks.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">

            {/* Exercise area */}
            <div className="p-6 bg-gray-50 rounded-lg mb-6">
              <div className="mb-6">
                <p className="text-lg mb-4">
                  1. Cá bhfuil tú i do{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank1 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank1")}
                  >
                    {blanks.blank1}
                  </span>{" "}
                  ?.
                </p>

                <p className="text-lg mb-4">
                  2. Táim i mo{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank2 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank2")}
                  >
                    {blanks.blank2}
                  </span>{" "}
                  i lár na cathrach.
                </p>

                <p className="text-lg mb-4">
                  3. Tá sé ina{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank3 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank3")}
                  >
                    {blanks.blank3}
                  </span>{" "}
                  faoin tuath.
                </p>

                <p className="text-lg mb-4">
                  4. Tá sí ina{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank4 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank4")}
                  >
                    {blanks.blank4}
                  </span>{" "}
                  sa phríomhchathair.
                </p>

                <p className="text-lg mb-4">
                  5. Táimid inár{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank5 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank5")}
                  >
                    {blanks.blank5}
                  </span>{" "}
                  I mbloc árasáin.
                </p>

                <p className="text-lg mb-4">
                  6. Tá sibh ina{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank6 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank6")}
                  >
                    {blanks.blank6}
                  </span>{" "}
                  in eastát tithíochta. 
                </p>

                <p className="text-lg mb-4">
                  7. Tá siad ina{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank7 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank7")}
                  >
                    {blanks.blank7}
                  </span>{" "}
                  i lár na tíre.
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
            <Link href="/themes/carbh-as-duit/section-2-b">
              <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Section
              </Button>
            </Link>

            <Link href="/themes/carbh-as-duit/section-3">
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