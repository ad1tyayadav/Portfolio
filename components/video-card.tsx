"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"

interface VideoCardProps {
  title: string
  views: string
  platform: "YouTube" | "Instagram"
  videoId: string
  thumbnail?: string
  isShort?: boolean
}

export function VideoCard({ title, views, platform, videoId, thumbnail, isShort = false }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  // Handle YouTube videos
  if (platform === "YouTube") {
    return (
      <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-zinc-950">
        <div className="relative aspect-video overflow-hidden">
          {!playing ? (
            <>
              <Image
                src={thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                onClick={() => setPlaying(true)}
              >
                <Button size="icon" className="h-12 w-12 rounded-full bg-red-500 hover:bg-red-600 text-white">
                  <Play className="h-6 w-6 fill-current" />
                </Button>
              </div>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          )}
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {isShort ? "YouTube Short" : "YouTube"}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
          <p className="text-gray-400 text-sm">{views} views</p>
        </div>
      </div>
    )
  }

  // Handle Instagram videos
  if (platform === "Instagram") {
    return (
      <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-zinc-950">
        <div className="relative aspect-[9/16] md:aspect-square overflow-hidden">
          {!playing ? (
            <>
              <Image
                src={thumbnail || "/placeholder.svg?height=1080&width=1080"}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                onClick={() => setPlaying(true)}
              >
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                >
                  <Play className="h-6 w-6 fill-current" />
                </Button>
              </div>
            </>
          ) : (
            <iframe
              src={`https://www.instagram.com/p/${videoId}/embed/`}
              title={title}
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          )}
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Instagram Reel</div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
          <p className="text-gray-400 text-sm">{views} views</p>
        </div>
      </div>
    )
  }

  return null
}
