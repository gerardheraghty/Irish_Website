"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Play, Pause, RotateCcw, Plus, Check, X, HelpCircle } from "lucide-react"

// Define the transcript with speaker information
const transcript = [
    { speaker: "S", text: "Haigh?" },
    { speaker: "M", text: "Sinéad! Máire anseo. Conas atá tú?" },
    { speaker: "S", text: "A Mháire, deas cloisteáil uait! Cé chaoi ina bhfuil tú?" },
    { speaker: "M", text: "Táim go maith. Tá cúrsaí an-ghnóthach faoi láthair. Táim ar ais ar scoil anois agus táim gnóthach le mo chaithimh aimsire chomh maith." },
    { speaker: "S", text: "Táim sa chás céanna. Tá an-iomarca le déanamh agam. Cén caithimh aimsire atá ar siúl agat?" },
    { speaker: "M", text: "Bhuel, bíonn traenáil CLG agam dhá lá in aghaidh na seachtaine agus bíonn bailé agam ar an Aoine. Taitníonn an pheil go mór liom. An imríonn tú peil?" },
    { speaker: "S", text: "Imrím peil ghaelach chomh maith! An imríonn tú ar an bhfoireann scoile? Tá páirc pheile mhór againn agus bíonn traenáil againn tar éis scoile gach Luan agus Déardaoin." },
    { speaker: "M", text: "Níl foireann scoile againn, ar an drochuair. Níl na háiseanna againn, ach tá cúirt chispheile iontach againn agus imrímid ag am lóin. Taitníonn cispheil liom freisin." },
    { speaker: "S", text: "Is trua mór é sin. Déanaimid cleachtadh ar ár scileanna ag na seisiúin traenála agus uaireanta caillimid amach ar ranganna do na cluichí! Coinníonn sé aclaí mé chomh maith." },
    { speaker: "M", text: "Tá éad orm! Ar aon nós, an bhfuil tú saor ar an Satharn? Tá cluiche ceannais agam agus bheadh sé iontach tú a fheiceáil ann sa lucht tacaíochta!" },
    { speaker: "S", text: "Táim saor! Seol na sonraí dom ar Whatsapp. Táim ag tnúth leis cheana féin." }
  ]

// Approximate timing for each sentence in seconds (you'll need to adjust these based on your actual audio)
const sentenceTiming = [4, 7, 5, 3, 9, 4, 5, 8, 10, 16, 20]

// Calculate cumulative timings
const cumulativeTiming = sentenceTiming.reduce(
  (acc, time, index) => {
    acc.push((acc[index] || 0) + time)
    return acc
  },
  [0],
)


// Define the correct answers
const correctAnswers = {
  column1: [
    "Déanaimid",
    "Táim",
    "bíonn",
    "Taitníonn",
    "imríonn",
    "Imrím",
    "imrímid",
    "Déanaimid",
    "caillimid",
    "Coinníonn"
  ],
  column2: [
    "caithimh aimsire",
    "dhá lá in aghaidh na seachtaine",
    "foireann scoile",
    "páirc pheile",
    "tar éis scoile",
    "cúirt chispheile",
    "am lóin",
    "seisiúin traenála",
    "cluiche ceannais",
    "lucht tacaíochta"
  ]
}

// Grammar Exercise Component
function GrammarExerciseSection() {
  // State for user inputs
  const [userInputs1, setUserInputs1] = useState([{ id: 1, value: "" }])
  const [userInputs2, setUserInputs2] = useState([{ id: 1, value: "" }])
  
  // State for showing answers
  const [showAnswers, setShowAnswers] = useState(false)
  
  // State for results
  const [results, setResults] = useState({ column1: 0, column2: 0 })
  
  // Add a new input row
  const addInputRow = (column) => {
    if (column === 1) {
      const newId = userInputs1.length > 0 ? Math.max(...userInputs1.map(input => input.id)) + 1 : 1
      setUserInputs1([...userInputs1, { id: newId, value: "" }])
    } else {
      const newId = userInputs2.length > 0 ? Math.max(...userInputs2.map(input => input.id)) + 1 : 1
      setUserInputs2([...userInputs2, { id: newId, value: "" }])
    }
  }
  
  // Handle input change
  const handleInputChange = (id, value, column) => {
    if (column === 1) {
      setUserInputs1(userInputs1.map(input => 
        input.id === id ? { ...input, value } : input
      ))
    } else {
      setUserInputs2(userInputs2.map(input => 
        input.id === id ? { ...input, value } : input
      ))
    }
  }

  // Remove an input row
  const removeInputRow = (id, column) => {
    if (column === 1) {
      // Don't remove if it's the last row
      if (userInputs1.length > 1) {
        setUserInputs1(userInputs1.filter(input => input.id !== id))
      } else {
        // If it's the last row, just clear it
        setUserInputs1([{ id: 1, value: "" }])
      }
    } else {
      if (userInputs2.length > 1) {
        setUserInputs2(userInputs2.filter(input => input.id !== id))
      } else {
        setUserInputs2([{ id: 1, value: "" }])
      }
    }
  }
  
  // Check answers
  const checkAnswers = () => {
    const userAnswers1 = userInputs1.map(input => input.value.trim()).filter(value => value !== "")
    const userAnswers2 = userInputs2.map(input => input.value.trim()).filter(value => value !== "")
    
    // Count correct answers for column 1
    let correctCount1 = 0
    for (const answer of userAnswers1) {
      if (correctAnswers.column1.includes(answer)) {
        correctCount1++
      }
    }
    
    // Count correct answers for column 2
    let correctCount2 = 0
    for (const answer of userAnswers2) {
      if (correctAnswers.column2.includes(answer)) {
        correctCount2++
      }
    }
    
    setResults({
      column1: correctCount1,
      column2: correctCount2
    })
    
    setShowAnswers(true)
  }
  
  // Reset the exercise
  const resetExercise = () => {
    setShowAnswers(false)
    setResults({ column1: 0, column2: 0 })
  }

  // Reset the exercise completely
  const resetEntireExercise = () => {
    setUserInputs1([{ id: 1, value: "" }])
    setUserInputs2([{ id: 1, value: "" }])
    setShowAnswers(false)
    setResults({ column1: 0, column2: 0 })
  }
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1 - Verbs */}
        <div>
          <div className="mb-4 bg-green-100 p-3 rounded-t-md">
            <h3 className="font-bold text-green-800 text-center">Briathra san aimsir láithreach</h3>
          </div>
          <div className="space-y-2">
            {userInputs1.map((input) => (
              <div key={input.id} className="flex">
                <input
                  type="text"
                  value={input.value}
                  onChange={(e) => handleInputChange(input.id, e.target.value, 1)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Cuir anseo..."
                />
                <button 
                  onClick={() => removeInputRow(input.id, 1)}
                  className="ml-2 p-2 text-gray-500 hover:text-red-500 focus:outline-none"
                  aria-label="Remove entry"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <Button 
              onClick={() => addInputRow(1)} 
              variant="outline" 
              className="w-full flex items-center justify-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Cuir ceann eile leis
            </Button>
          </div>
        </div>
        
        {/* Column 2 - Genitive Examples */}
        <div>
          <div className="mb-4 bg-green-100 p-3 rounded-t-md">
            <h3 className="font-bold text-green-800 text-center">Samplaí den tuiseal ginideach</h3>
          </div>
          <div className="space-y-2">
            {userInputs2.map((input) => (
              <div key={input.id} className="flex">
                <input
                  type="text"
                  value={input.value}
                  onChange={(e) => handleInputChange(input.id, e.target.value, 2)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Cuir anseo..."
                />
                <button 
                  onClick={() => removeInputRow(input.id, 2)}
                  className="ml-2 p-2 text-gray-500 hover:text-red-500 focus:outline-none"
                  aria-label="Remove entry"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <Button 
              onClick={() => addInputRow(2)} 
              variant="outline" 
              className="w-full flex items-center justify-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Cuir ceann eile leis
            </Button>
          </div>
        </div>
      </div>
      
      {/* Results */}
      {showAnswers && (
        <div className="bg-green-50 p-4 rounded-md mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-white rounded-md shadow-sm">
              <h4 className="font-bold text-green-700 mb-2">Do chuid freagraí // Your answers:</h4>
              <div className="flex items-center space-x-2">
                <div className="font-medium">Briathra san aimsir láithreach: {results.column1} / {correctAnswers.column1.length} ceart</div>
                <div className={results.column1 > 0 ? "text-green-500" : "text-red-500"}>
                  {results.column1 > 0 ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="font-medium">Samplaí den tuiseal ginideach: {results.column2} / {correctAnswers.column2.length} ceart</div>
                <div className={results.column2 > 0 ? "text-green-500" : "text-red-500"}>
                  {results.column2 > 0 ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Correct Answers Table */}
          <h4 className="font-bold text-green-700 mb-2">Na Freagraí Cearta:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="mb-2 p-2 bg-green-100 font-bold rounded-t-md text-center">Briathra san aimsir láithreach</div>
              <div className="space-y-2 p-2 border border-green-100 rounded-b-md">
                {correctAnswers.column1.map((answer, index) => (
                  <div key={index} className="p-2 bg-white rounded-md">
                    {answer}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="mb-2 p-2 bg-green-100 font-bold rounded-t-md text-center">Samplaí den tuiseal ginideach</div>
              <div className="space-y-2 p-2 border border-green-100 rounded-b-md">
                {correctAnswers.column2.map((answer, index) => (
                  <div key={index} className="p-2 bg-white rounded-md">
                    {answer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Action Buttons */}
      <div className="flex justify-between">
        {!showAnswers ? (
          <Button 
            onClick={checkAnswers} 
            className="bg-green-600 hover:bg-green-700"
          >
            Seiceáil na Freagraí
          </Button>
        ) : (
          <Button 
            onClick={resetExercise} 
            variant="outline"
          >
            Tosaigh Arís
          </Button>
        )}
        <Button 
            onClick={resetEntireExercise} 
            variant="outline"
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            Glan gach rud
          </Button>

      </div>
    </div>
  )
}

export default function Caitheamh_aimsire1() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [showTip, setShowTip] = useState(false)

  // Initialize audio player
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleDurationChange = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setActiveIndex(-1)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("durationchange", handleDurationChange)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("durationchange", handleDurationChange)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Effect to close the popup when clicking outside
  useEffect(() => {
    if (!showTip) return

    const handleClickOutside = (event) => {
      if (event.target.closest('.tip-popup') === null && 
          event.target.closest('.tip-button') === null) {
        setShowTip(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showTip])

  // Update active sentence based on current time
  useEffect(() => {
    if (!isPlaying) return

    // Find the current sentence based on timing
    const index = cumulativeTiming.findIndex((time) => currentTime < time) - 1
    setActiveIndex(index >= 0 ? index : -1)
  }, [currentTime, isPlaying])

  // Play/pause audio
  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Restart audio  
  const restartAudio = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = 0
    setActiveIndex(-1)
    if (isPlaying) {
      audio.play()
    }
  }

  // Format time in MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Get speaker color
  const getSpeakerColor = (speaker: string) => {
    return speaker === "M" ? "text-blue-600" : "text-red-600"
  }

  // Get background color for active sentence
  const getBackgroundColor = (index: number, speaker: string) => {
    if (index === activeIndex) {
      return speaker === "M" ? "bg-blue-100" : "bg-red-100"
    }
    return ""
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
            <div className="text-sm text-muted-foreground">Section 1 of 4</div>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Comhrá</h1>

          <p className="text-xl text-muted-foreground mb-8">
          Bhí am iontach ag Máire agus Sinéad sa Ghaeltacht, ach anois tá siad ar ais ar ais sa bhaile. Cuireann Máire glaoch ar Sinéad.
          </p>

          {/* Audio Player Widget */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-green-700"></h2>

            <div className="mb-6">
            <audio 
                ref={audioRef} 
                src="/audio/comhra_demo.m4a" 
                preload="auto"
            >
                Your browser does not support the audio element.
            </audio>

              <div className="flex flex-col space-y-4">
                {/* Audio controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button onClick={togglePlayPause} variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button onClick={restartAudio} variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <RotateCcw className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </div>
                </div>

                {/* Progress bar */}
                <div
                  className="w-full bg-gray-200 rounded-full h-2.5 cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const percent = (e.clientX - rect.left) / rect.width
                    if (audioRef.current) {
                      audioRef.current.currentTime = percent * (duration || 0)
                    }
                  }}
                >
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>


            {/* Transcript */}
            <div className="border rounded-md p-4 bg-gray-50">
              <h3 className="text-lg font-bold mb-4 text-green-700"></h3>
              <div className="space-y-3">
                {transcript.map((line, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-md transition-colors ${getBackgroundColor(index, line.speaker)}`}
                  >
                    <span className={`font-bold ${getSpeakerColor(line.speaker)}`}>
                      {line.speaker === "M" ? "Máire: " : "Sinéad: "}
                    </span>
                    {line.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter mb-4 text-green-700">Ceisteanna bunaithe ar an nglaoch</h2>

          <p className="text-xl text-muted-foreground mb-8">
          Scríobh na freagraí sa chóipleabhar. // Write the answers in the copybook.
          </p>

          {/* Assignment Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border rounded-md p-6 bg-gray-50">
              <div className="space-y-6">
                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">1.</span>
                  <p>Cén fáth a bhfuil Máire gnóthach?</p>
                </div>
                
                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">2.</span>
                  <p>Cén caithimh aimsire atá ag Máire?</p>
                </div>
                
                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">3.</span>
                  <p>Cathain a bhíonn traenáil leis an bhfoireann scoile ag Sinéad?</p>
                </div>

                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">4.</span>
                  <p>Cén fáth a bhfuil éad ar Mháire?</p>
                </div>

                <div className="flex">
                  <span className="font-bold text-green-700 mr-2">5.</span>
                  <p>Cén fáth ar ghlaoigh Máire ar Shinéad?</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter mb-4 text-green-700">Ceacht gramadaí</h2>

          <div className="relative mb-8">
            <p className="text-xl text-muted-foreground">
              Aimsigh na briathra agus na focail sa théacs agus scríobh sa bhosca cuí iad. // Find the verbs and the words in the text and write them in the appropriate box.
            </p>
            
            {/* Tip button */}
            <button 
              className="mt-2 text-green-600 hover:text-green-800 inline-flex items-center tip-button"
              onClick={() => setShowTip(!showTip)}
            >
              <HelpCircle className="h-4 w-4 mr-1" />
              Click here for tip
            </button>
            
            {/* Popup for the tip */}
            {showTip && (
              <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-lg border border-green-200 max-w-md tip-popup">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-green-700">An Tuiseal Ginideach</h3>
                  <button 
                    onClick={() => setShowTip(false)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-gray-700">
                  Bíonn an tuiseal ginideach i bhfeidhm nuair a thagann dhá ainmhfocal le cheile. De ghnáth, athraíonn deireadh an dara ainmfhocal m.sh am lóin.
                </p>
              </div>
            )}
          </div>

          {/* Exercise Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border rounded-md p-6 bg-gray-50">
              <div className="space-y-6">
                <GrammarExerciseSection />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/themes/caitheamh-aimsire">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ar ais chuig an bPlean Aonad
              </Button>
            </Link>

            <Link href="/themes/caitheamh-aimsire/section-2">
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