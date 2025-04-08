"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, RefreshCw, Check, ChevronLeft, ChevronRight } from "lucide-react"

// Define difficulty levels
const difficultyLevels = {
  easy: { text: "Bunleibhéal", color: "text-green-600" },
  medium: { text: "Meánleibhéal", color: "text-yellow-600" },
  hard: { text: "Ardleibhéal", color: "text-red-600" },
}

// Define the sentences for the exercise with difficulty levels
const sentences = [
  { text: "Cá bhfuil cónaí ort?", difficulty: "easy" },
  { text: "Tá cónaí orm faoin tuath.", difficulty: "easy" },
  { text: "Tá orainn sa chathair.", difficulty: "easy" },
  { text: "Tá cónaí orthu i gceantar uirbeach.", difficulty: "hard" },
  { text: "Tá mo theach suite in eastáit tithíochta.", difficulty: "medium" },
  { text: "Is ceantar uirbeach é Baile Átha Cliath.", difficulty: "hard" },
  { text: "Céard é daonra cathair Luimnigh?", difficulty: "hard" },
  { text: "Tá cónaí orm ar an gceathrú urlár den árasán.", difficulty: "medium" },
  { text: "Tá cónaí ort i dteach scoite sa chathair.", difficulty: "medium" },
  { text: "Ar mhaith leat a bheith i do chónaí i mBungaló?", difficulty: "medium" },
  { text: "Tá daonra Baile Átha Cliath ag dul in airde.", difficulty: "hard" },
]

// English translations for reference
const translations = [
  "Where do you live?",
  "I live in the countryside.",
  "We live in the city.",
  "They live in an urban area.",
  "My house is located in a housing estate.",
  "Dublin is an urban area.",
  "What is the population of Limerick city?",
  "I live on the fourth floor of the apartment.",
  "You live in a detached house in the city.",
  "Would you like to live in a bungalow?",
  "The population of Dublin is rising.",
]

export default function FamilySection2Page() {
  // Current sentence index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Original words and shuffled words
  const [originalWords, setOriginalWords] = useState<string[]>([])
  const [shuffledWords, setShuffledWords] = useState<string[]>([])

  // User's arrangement
  const [userArrangement, setUserArrangement] = useState<string[]>([])

  // Track if current sentence is correct
  const [isCorrect, setIsCorrect] = useState(false)

  // Track completed sentences
  const [completedSentences, setCompletedSentences] = useState<boolean[]>(Array(sentences.length).fill(false))

  // Initialize the current sentence
  useEffect(() => {
    setupSentence(currentIndex)
  }, [currentIndex])

  // Setup a new sentence
  const setupSentence = (index: number) => {
    const sentence = sentences[index].text
    const words = sentence.split(" ")

    setOriginalWords(words)
    setUserArrangement([])
    setIsCorrect(false)

    // Shuffle the words
    const shuffled = [...words].sort(() => Math.random() - 0.5)
    setShuffledWords(shuffled)
  }

  // Handle selecting a word from the shuffled list
  const selectWord = (word: string, index: number) => {
    // Remove the word from shuffled words
    const newShuffledWords = [...shuffledWords]
    newShuffledWords.splice(index, 1)
    setShuffledWords(newShuffledWords)

    // Add the word to user arrangement
    setUserArrangement([...userArrangement, word])
  }

  // Handle removing a word from the user arrangement
  const removeWord = (index: number) => {
    // Get the word to remove
    const wordToRemove = userArrangement[index]

    // Remove from user arrangement
    const newArrangement = [...userArrangement]
    newArrangement.splice(index, 1)
    setUserArrangement(newArrangement)

    // Add back to shuffled words
    setShuffledWords([...shuffledWords, wordToRemove])
  }

  // Check if the current arrangement is correct
  const checkArrangement = () => {
    const isCorrect = userArrangement.join(" ") === originalWords.join(" ")
    setIsCorrect(isCorrect)

    if (isCorrect) {
      // Mark this sentence as completed
      const newCompleted = [...completedSentences]
      newCompleted[currentIndex] = true
      setCompletedSentences(newCompleted)
    }

    return isCorrect
  }

  // Reset the current sentence
  const resetSentence = () => {
    setupSentence(currentIndex)
  }

  // Navigate to the next sentence
  const nextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // Navigate to the previous sentence
  const prevSentence = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Get current sentence difficulty
  const getCurrentDifficulty = () => {
    return sentences[currentIndex].difficulty
  }

  // Calculate progress percentage
  const progressPercentage = ((completedSentences.filter(Boolean).length / sentences.length) * 100).toFixed(0)

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

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">
           Gramadach A - Ord na bhfocal. 
          </h1> 

          <p className="text-xl text-muted-foreground mb-8">
            Cur na focail san ord ceart san abairt.<br />
            Rearrange the words to form correct sentences.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Your Progress</span>
                <span className="text-sm text-muted-foreground">
                  {completedSentences.filter(Boolean).length} of {sentences.length} completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>

            {/* Sentence navigation */}
            <div className="flex justify-between items-center mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSentence}
                disabled={currentIndex === 0}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              <span className="text-sm font-medium">
                Sentence {currentIndex + 1} of {sentences.length}
                {completedSentences[currentIndex] && (
                  <span className="ml-2 text-green-600">
                    <Check className="h-4 w-4 inline" />
                  </span>
                )}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSentence}
                disabled={currentIndex === sentences.length - 1}
                className="flex items-center"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Exercise area */}
            <div className="p-6 bg-gray-50 rounded-lg mb-6">
              <h2 className="text-xl font-bold mb-4 text-green-700 flex items-center">
                Rearrange the Words
                <span className={`ml-2 text-sm font-medium ${difficultyLevels[getCurrentDifficulty()].color}`}>
                  - {difficultyLevels[getCurrentDifficulty()].text}
                </span>
              </h2>

              {/* User's arrangement area */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Your sentence:</p>
                <div className="min-h-16 p-4 bg-white border-2 border-dashed border-gray-300 rounded-md flex flex-wrap gap-2">
                  {userArrangement.length === 0 ? (
                    <p className="text-gray-400 italic">Click on words below to build your sentence</p>
                  ) : (
                    userArrangement.map((word, index) => (
                      <div
                        key={`arranged-${index}`}
                        onClick={() => removeWord(index)}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-md cursor-pointer hover:bg-green-200 transition-colors"
                      >
                        {word}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Available words */}
              <div>
                <p className="text-sm font-medium mb-2">Available words:</p>
                <div className="flex flex-wrap gap-2">
                  {shuffledWords.map((word, index) => (
                    <div
                      key={`shuffled-${index}`}
                      onClick={() => selectWord(word, index)}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feedback area */}
            {isCorrect && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                <p className="font-medium flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Ceart! Maith thú!!
                </p>
                <p className="mt-2">
                  <span className="font-medium">Sentence:</span> {originalWords.join(" ")}
                </p>
                <p className="mt-2">
                  <span className="font-medium">English:</span> {translations[currentIndex]}
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={checkArrangement}
                className="bg-green-600 hover:bg-green-700"
                disabled={userArrangement.length !== originalWords.length || isCorrect}
              >
                Check Answer
              </Button>

              <Button
                variant="outline"
                onClick={resetSentence}
                className="flex items-center"
                disabled={isCorrect && completedSentences[currentIndex]}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>

              {isCorrect && currentIndex < sentences.length - 1 && (
                <Button onClick={nextSentence} className="ml-auto bg-green-600 hover:bg-green-700 flex items-center">
                  Next Sentence
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/themes/carbh-as-duit/section-1">
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