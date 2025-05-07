"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react"

// Define the vocabulary pairs for matching
const vocabularyPairs = [
  { irish: "Caitheamh aimsire", english: "Hobby" },
  { irish: "Caithimh aimsire", english: "Hobbies" },
  { irish: "Seisiún traenála", english: "Training session" },
  { irish: "Dhá lá in aghaidh na seachtaine", english: "Two days a week" },
  { irish: "Lucht tacaíocht", english: "Support group/fans" },
  { irish: "Cluiche ceannais", english: "Final" },
  { irish: "CLG (Cumann Lúthchleas Gael)", english: "GAA" },
  { irish: "Páirc pheile", english: "Football pitch" },
  { irish: "Cúirt chispheile", english: "Basketball pitch" },
  { irish: "An-ghnóthach", english: "Very busy" },
  { irish: "Foireann scoile", english: "School team" },
  { irish: "Na háiseanna", english: "Resources" },
  { irish: "Uaireanta", english: "Sometimes" },
  { irish: "An-iomarca", english: "Too much" },
  { irish: "Ar an drochuair", english: "Unfortunately" },
  { irish: "Sonraí", english: "Details" },
  { irish: "Táim ag tnúth leis", english: "Looking forward to it" },
  { irish: "Cheana féin", english: "Already" },
]

export default function Caitheamh_aimsire2() {
  // Shuffle the vocabulary lists
  const [irishWords, setIrishWords] = useState([])
  const [englishWords, setEnglishWords] = useState([])

  // Track selected words
  const [selectedIrishWord, setSelectedIrishWord] = useState(null)
  const [selectedEnglishWord, setSelectedEnglishWord] = useState(null)

  // Track matched pairs
  const [matchedPairs, setMatchedPairs] = useState([])

  // Track if exercise is complete
  const [isComplete, setIsComplete] = useState(false)

  // Track score
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)

  // Initialize the exercise
  useEffect(() => {
    resetExercise()
  }, [])

  // Shuffle the vocabulary lists
  const resetExercise = () => {
    const shuffledIrish = [...vocabularyPairs]
      .sort(() => Math.random() - 0.5)
      .map((pair) => pair.irish)
    const shuffledEnglish = [...vocabularyPairs].sort(() => Math.random() - 0.5).map((pair) => pair.english)

    setIrishWords(shuffledIrish)
    setEnglishWords(shuffledEnglish)
    setSelectedIrishWord(null)
    setSelectedEnglishWord(null)
    setMatchedPairs([])
    setIsComplete(false)
    setScore(0)
    setAttempts(0)
  }

  // Handle word selection
  const handleIrishWordClick = (word) => {
    // If word is already matched, do nothing
    if (matchedPairs.some((pair) => pair.irish === word)) return

    setSelectedIrishWord(word)

    // If an English word is already selected, check for a match
    if (selectedEnglishWord) {
      checkForMatch(word, selectedEnglishWord)
    }
  }

  const handleEnglishWordClick = (word) => {
    // If word is already matched, do nothing
    if (matchedPairs.some((pair) => pair.english === word)) return

    setSelectedEnglishWord(word)

    // If an Irish word is already selected, check for a match
    if (selectedIrishWord) {
      checkForMatch(selectedIrishWord, word)
    }
  }

  // Check if selected words match
  const checkForMatch = (irishWord, englishWord) => {
    setAttempts(attempts + 1)

    // Find if there's a matching pair
    const isMatch = vocabularyPairs.some((pair) => pair.irish === irishWord && pair.english === englishWord)

    if (isMatch) {
      // Add to matched pairs
      setMatchedPairs([...matchedPairs, { irish: irishWord, english: englishWord }])
      setScore(score + 1)

      // Clear selections
      setSelectedIrishWord(null)
      setSelectedEnglishWord(null)

      // Check if exercise is complete
      if (matchedPairs.length + 1 === vocabularyPairs.length) {
        setIsComplete(true)
      }
    } else {
      // Clear selections after a short delay
      setTimeout(() => {
        setSelectedIrishWord(null)
        setSelectedEnglishWord(null)
      }, 1000)
    }
  }

  // Get class for word item based on selection and match status
  const getIrishWordClass = (word) => {
    if (matchedPairs.some((pair) => pair.irish === word)) {
      return "bg-green-200 border-green-500"
    }
    if (selectedIrishWord === word) {
      return "bg-blue-200 border-blue-500"
    }
    return "bg-white hover:bg-green-50"
  }

  const getEnglishWordClass = (word) => {
    if (matchedPairs.some((pair) => pair.english === word)) {
      return "bg-green-200 border-green-500"
    }
    if (selectedEnglishWord === word) {
      return "bg-blue-200 border-blue-500"
    }
    return "bg-white hover:bg-green-50"
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/themes/caitheamh-aimsire" className="inline-flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ar ais chuig an bPlean Aonad
            </Link>
            <div className="text-sm text-muted-foreground">Section 2 of 4</div>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">
            Liosta foclorá agus ceacht meaitseála
          </h1>

          <p className="text-xl text-muted-foreground mb-8">Match the Irish words with their English translations.</p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-700">Ceacht meatseála</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Score: {score}/{vocabularyPairs.length} 
                </span>
                <Button variant="outline" size="sm" onClick={resetExercise} className="flex items-center gap-1">
                  <RefreshCw className="h-3 w-3" />
                  Reset
                </Button>
              </div>
            </div>

            {isComplete ? (
              <div className="p-6 bg-green-100 rounded-lg text-center mb-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">Comhghairdeas! (Congratulations!)</h3>
                <p className="mb-4">You've successfully matched all the words!</p>
                <p className="text-sm text-muted-foreground">
                  You completed the exercise with {score} correct matches in {attempts} attempts.
                </p>
              </div>
            ) : (
              <p className="mb-6 text-muted-foreground">
                Click on a word in each column to match the Irish word with its English translation.
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Irish Words Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-center text-green-700">Focail Ghaeilge</h3>
                <div className="space-y-3">
                  {irishWords.map((word, index) => (
                    <div
                      key={`irish-${index}`}
                      className={`p-3 border-2 rounded-md cursor-pointer transition-colors ${getIrishWordClass(word)}`}
                      onClick={() => handleIrishWordClick(word)}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>

              {/* English Words Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-center text-green-700">Focail Bhéarla</h3>
                <div className="space-y-3">
                  {englishWords.map((word, index) => (
                    <div
                      key={`english-${index}`}
                      className={`p-3 border-2 rounded-md cursor-pointer transition-colors ${getEnglishWordClass(word)}`}
                      onClick={() => handleEnglishWordClick(word)}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {isComplete && (
              <div className="mt-8 p-4 bg-green-50 rounded-md">
                <h3 className="text-lg font-bold mb-2 text-green-700">Vocabulary Review</h3>
                <div className="grid grid-cols-2 gap-2">
                  {vocabularyPairs.map((pair, index) => (
                    <div key={index} className="p-2 border rounded-md flex items-center">
                      <div className="flex justify-between w-full">
                        <span className="font-medium">{pair.irish}</span>
                        <span className="text-muted-foreground">{pair.english}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Link href="/themes/caitheamh-aimsire/section-1">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Section
              </Button>
            </Link>

            <Link href="/themes/caitheamh-aimsire/section-3">
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