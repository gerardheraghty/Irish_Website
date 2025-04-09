"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, ExternalLink } from "lucide-react"

export default function staidearCompPage() {
  const [isClient, setIsClient] = useState(false)

  // PDF file path
  const pdfPath = "/documents/Staidéar_Comparáideach_acmhainnmheasúnaithe.pdf"

  // Set isClient to true when component mounts (to avoid SSR issues with PDF viewer)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <Link href="/literature/aiseanna_meas" className="inline-flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ar ais chuig Áiseanna measúnaithe
            </Link>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-green-700">Staidéar Comparáideach</h1>
          <p className="text-xl text-muted-foreground mb-8">Bileog Oibre</p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {/* Download button */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center text-muted-foreground">
                <FileText className="mr-2 h-5 w-5" />
                <span>Staidéar_Comparáideach_acmhainnmheasúnaithe.pdf</span>
              </div>

              <div className="flex gap-3">
                <a href={pdfPath} download="Staidéar_Comparáideach_acmhainnmheasúnaithe.pdf" className="inline-flex">
                  <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </a>

                <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Open in New Tab
                  </Button>
                </a>
              </div>
            </div>

            {/* PDF Preview */}
            {isClient && (
              <div className="border rounded-md overflow-hidden">
                <div className="relative pt-[56.25%] md:pt-[75%] lg:pt-[100%]">
                  <iframe
                    src={`${pdfPath}#view=FitH`}
                    className="absolute top-0 left-0 w-full h-full"
                    title="PDF Preview"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Fallback message if iframe doesn't work */}
            <div className="mt-4 p-4 bg-gray-50 rounded-md text-center">
              <p className="text-muted-foreground">
                If the preview doesn't load correctly, please use the download button above to view the PDF.
              </p>
            </div>
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
