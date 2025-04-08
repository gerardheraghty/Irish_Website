"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, RefreshCw, HelpCircle } from "lucide-react"

// Define difficulty levels and their colors
const difficultyLevels = [
  { level: "easy", color: "bg-green-500", label: "bunleibhéal" },
  { level: "medium", color: "bg-yellow-500", label: "meánleibhéal" },
  { level: "hard", color: "bg-red-500", label: "ardleibhéal" },
]

// Define the vocabulary pairs for matching with difficulty levels
const vocabularyPairs = [
  { irish: "Áit chónaithe (b)", english: "Home", difficulty: "medium" },
  { irish: "An teach (f)", english: "The house", difficulty: "easy" },
  { irish: "An ceantar (f)", english: "The area", difficulty: "medium" },
  { irish: "An chathair (b)", english: "The city", difficulty: "easy" },
  { irish: "Ceantar uirbeach (f)", english: "Urban area", difficulty: "hard" },
  { irish: "Ceantar tuaithe (f)", english: "Rural area", difficulty: "hard" },
  { irish: "Faoin tuath", english: "In the countryside", difficulty: "easy" },
  { irish: "An baile (f)", english: "The town", difficulty: "easy" },
  { irish: "An bruachbhaile(f)", english: "Outskirts of the town/suburb", difficulty: "hard" },
  { irish: "Daonra (f)", english: "The population", difficulty: "hard" },
  { irish: "Tá cónaí orm (b) –", english: "I live", difficulty: "easy" },
  { irish: "Eastát tithíochta (f)", english: "Housing estate", difficulty: "medium" },
  { irish: "Teach scoite (f)", english: "Detached house", difficulty: "medium" },
  { irish: "Teach leathscoite (f)", english: "Semi-detached house", difficulty: "medium" },
  { irish: "Teach sraithe (b)", english: "Terraced house", difficulty: "medium" },
  { irish: "An t-árasán (f)", english: "The apartment", difficulty: "hard" },
  { irish: "Bungaló (f)", english: "Bungalow", difficulty: "medium" },
]

export default function FamilySection1Page() {
  // Shuffle the vocabulary lists
  const [irishWords, setIrishWords] = useState<Array<{ word: string; difficulty: string }>>([])
  const [englishWords, setEnglishWords] = useState<string[]>([])

  // Track selected words
  const [selectedIrishWord, setSelectedIrishWord] = useState<string | null>(null)
  const [selectedEnglishWord, setSelectedEnglishWord] = useState<string | null>(null)

  // Track matched pairs
  const [matchedPairs, setMatchedPairs] = useState<{ irish: string; english: string }[]>([])

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
      .map((pair) => ({ word: pair.irish, difficulty: pair.difficulty }))
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
  const handleIrishWordClick = (word: string) => {
    // If word is already matched, do nothing
    if (matchedPairs.some((pair) => pair.irish === word)) return

    setSelectedIrishWord(word)

    // If an English word is already selected, check for a match
    if (selectedEnglishWord) {
      checkForMatch(word, selectedEnglishWord)
    }
  }

  const handleEnglishWordClick = (word: string) => {
    // If word is already matched, do nothing
    if (matchedPairs.some((pair) => pair.english === word)) return

    setSelectedEnglishWord(word)

    // If an Irish word is already selected, check for a match
    if (selectedIrishWord) {
      checkForMatch(selectedIrishWord, word)
    }
  }

  // Check if selected words match
  const checkForMatch = (irishWord: string, englishWord: string) => {
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
  const getIrishWordClass = (word: string) => {
    if (matchedPairs.some((pair) => pair.irish === word)) {
      return "bg-green-200 border-green-500"
    }
    if (selectedIrishWord === word) {
      return "bg-blue-200 border-blue-500"
    }
    return "bg-white hover:bg-green-50"
  }

  const getEnglishWordClass = (word: string) => {
    if (matchedPairs.some((pair) => pair.english === word)) {
      return "bg-green-200 border-green-500"
    }
    if (selectedEnglishWord === word) {
      return "bg-blue-200 border-blue-500"
    }
    return "bg-white hover:bg-green-50"
  }

  // Get difficulty color for a word
  const getDifficultyColor = (word: string) => {
    const pair = vocabularyPairs.find((pair) => pair.irish === word)
    if (!pair) return ""

    const difficulty = difficultyLevels.find((level) => level.level === pair.difficulty)
    return difficulty ? difficulty.color : ""
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/themes/carbh-as-duit" className="inline-flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ar ais chuig an bPlean Aonad
            </Link>
            <div className="text-sm text-muted-foreground">Section 1 of 4</div>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">
            Liosta foclorá agus ceacht meaitseála
          </h1>

          <p className="text-xl text-muted-foreground mb-8">Match the Irish words with their English translations.</p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {/* Difficulty Key */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2"> 
                <h3 className="font-medium">Difficulty Level Key:</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {difficultyLevels.map((level) => (
                  <div key={level.level} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${level.color}`}></div>
                    <span>{level.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-700">Matching Exercise</h2>
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
                Click on a word in each column to match the Irish word with its English translation.<br />
                <br />
                Please note: <br />
                <span className="font-bold text-black">(b)</span> = ainmfhocal baininscneach<br />
                <span className="font-bold text-black">(f)</span> = ainmfhocal firinscneach<br />
              </p>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Irish Words Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-center text-green-700">Irish Words</h3>
                <div className="space-y-3">
                  {irishWords.map((item, index) => (
                    <div
                      key={`irish-${index}`}
                      className={`p-3 border-2 rounded-md cursor-pointer transition-colors flex items-center ${getIrishWordClass(item.word)}`}
                      onClick={() => handleIrishWordClick(item.word)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${difficultyLevels.find((level) => level.level === item.difficulty)?.color}`}
                      ></div>
                      {item.word}
                    </div>
                  ))}
                </div>
              </div>

              {/* English Words Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-center text-green-700">English Words</h3>
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
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${difficultyLevels.find((level) => level.level === pair.difficulty)?.color}`}
                      ></div>
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
            <Link href="/themes/family">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Unit Plan
              </Button>
            </Link>

            <Link href="/themes/family/section-2">
              <Button className="bg-green-600 hover:bg-green-700 flex items-center">
                Next Section
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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