"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

// Define the correct answers
const correctAnswers = {
  blank1: "arán",
  blank2: "úlla",
  blank3: "cáis",
}

export default function FoodGamePage() {
  const [answers, setAnswers] = useState<string[]>([])
  const [blanks, setBlanks] = useState({
    blank1: "______",
    blank2: "______",
    blank3: "______",
  })
  const [blankToAnswerMap, setBlankToAnswerMap] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
  })
  const [result, setResult] = useState("")
  const [showResult, setShowResult] = useState(false)

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
  function selectAnswer(answer: string, index: number) {
    // Find the first empty blank
    const blankId = Object.keys(blanks).find((id) => blanks[id as keyof typeof blanks] === "______")

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
  function removeAnswer(blankId: string) {
    if (blanks[blankId as keyof typeof blanks] !== "______") {
      // Get the answer that was in this blank
      const answer = blanks[blankId as keyof typeof blanks]

      // Get the index of the answer
      const answerIndex = Number.parseInt(blankToAnswerMap[blankId as keyof typeof blankToAnswerMap].split("-")[1])

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
      if (blanks[blankId as keyof typeof blanks] !== correctAnswers[blankId as keyof typeof correctAnswers]) {
        allCorrect = false
        break
      }
    }

    setShowResult(true)

    if (allCorrect) {
      setResult("Comhghairdeas! Tá na freagraí go léir ceart agat! (Congratulations, you got all answers correct!)")
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
    })
    setBlankToAnswerMap({
      blank1: "",
      blank2: "",
      blank3: "",
    })
    setShowResult(false)
    initAnswerBubbles()
  }

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <div className="container px-4 md:px-6 py-8 flex-1">
        <div className="flex justify-between items-center mb-8">
          <Link href="/themes" className="text-green-600 hover:text-green-700">
            <Button variant="outline" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Ar ais chuig na téamaí
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">Food Vocabulary Game</h1>
            <p className="text-lg text-muted-foreground">Complete the sentences with the correct Irish food words</p>
          </header>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-700">Complete the Sentence</h2>

              <div className="p-4 border rounded-md bg-green-50">
                <p className="text-lg mb-4">
                  1. Is maith liom{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank1 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank1")}
                  >
                    {blanks.blank1}
                  </span>{" "}
                  le bricfeasta. (I like <em>bread</em> for breakfast.)
                </p>

                <p className="text-lg mb-4">
                  2. Cheannaigh mé{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank2 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank2")}
                  >
                    {blanks.blank2}
                  </span>{" "}
                  sa siopa. (I bought <em>apples</em> in the shop.)
                </p>

                <p className="text-lg mb-4">
                  3. Tá{" "}
                  <span
                    className={`px-2 py-1 rounded cursor-pointer ${blanks.blank3 !== "______" ? "bg-green-200" : "bg-gray-200"}`}
                    onClick={() => removeAnswer("blank3")}
                  >
                    {blanks.blank3}
                  </span>{" "}
                  ar an mbord. (There is <em>cheese</em> on the table.)
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center my-6">
                {answers.map(
                  (answer, index) =>
                    answer && (
                      <div
                        key={`answer-${index}`}
                        className="px-4 py-2 bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-700 transition-colors"
                        onClick={() => selectAnswer(answer, index)}
                      >
                        {answer}
                      </div>
                    ),
                )}
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={checkAnswers} className="bg-green-600 hover:bg-green-700">
                  Check Answers
                </Button>
                <Button onClick={resetGame} variant="outline">
                  Reset Game
                </Button>
              </div>

              {showResult && (
                <div
                  className={`p-4 rounded-md text-center text-lg ${result.includes("Comhghairdeas") ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}
                >
                  {result}
                </div>
              )}
            </div>

            <div className="mt-8 p-4 border-t pt-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">How to Play</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Click on a word from the word bank to place it in the next available blank.</li>
                <li>Click on a filled blank to remove the word and return it to the word bank.</li>
                <li>Click "Check Answers" to see if your answers are correct.</li>
                <li>Click "Reset Game" to start over.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-6 border-t bg-white">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cianas Website
          </p>
        </div>
      </footer>
    </div>
  )
}

