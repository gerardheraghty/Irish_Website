"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Play, Pause, RotateCcw } from "lucide-react"

// Define the transcript with speaker information
const transcript = [
  { speaker: "M", text: "Haigh, Is mise Máire. Conas atá tú?" },
  { speaker: "S", text: "Haigh! Is mise Sinéad. Táim go maith, ach neirbhíseach. Níl aithne agam ar éinne." },
  { speaker: "M", text: "Ná mise ach oiread. Cárbh as duit?" },
  { speaker: "S", text: "Is as Baile Átha Cliath mé. Céard fút?" },
  {
    speaker: "M",
    text: "Is as Cill Dara mé, ach táim i mo chónaí i mBaile Átha Cliath faoi láthair. An bhfuil tú i do chónaí sa chathair?",
  },
  { speaker: "S", text: "Tá. Táim i mo chónaí i mbloc árasáin ar Shráid Uí Chónaill." },
  { speaker: "M", text: "M'anam, tá tú i do chónaí i lár na cathrach!" },
  { speaker: "S", text: "Tá. Tá sé ar fheabhas. Tá gach rud ar leac an dorais. An bhfuil tú i do chónaí sa chathair?" },
  {
    speaker: "M",
    text: "Níl, ar an drochuair. Tá na hárasáin róchostasch dom. Táim i mo chónaí i mbruachbhaile, Dún Droma.",
  },
  {
    speaker: "S",
    text: "Tá aithne agam ar go leor daoine atá ina gcónaí i nDún Droma. Is ceantar an-áisiúil é mar téann an Luas díreach isteach go dtí lár na cathrach.",
  },
  {
    speaker: "M",
    text: "Caithfidh mé a rá go bhfuil an córas iompar poiblí go maith ann, ach ba bhreá liom a bheith i mo chónaí i gcroílár na cathrach. Bíonn i gcónaí rud éigin ar siúl inti!",
  },
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

export default function TeamaiU1S3Page1() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)

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
            <Link href="/themes/carbh-as-duit" className="inline-flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ar ais chuig an bPlean Aonad
            </Link>
            <div className="text-sm text-muted-foreground">Section 3 of 4</div>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Comhrá</h1>

          <p className="text-xl text-muted-foreground mb-8">
          Buaileann beirt chailíní ag cúrsa samhraidh sa Ghaeltacht. Cuireann siad féin in aithne.
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

          <div className="flex justify-between">
            <Link href="/themes/carbh-as-duit/section-2-c">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Section
              </Button>
            </Link>

            <Link href="/themes/carbh-as-duit/section-4">
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