"use client"

import { useEffect, useRef } from "react"
import type { Map as LeafletMap } from "leaflet"
import "leaflet/dist/leaflet.css"

type LocationMapProps = {
  lat: number
  lng: number
  label: string
}

export function LocationMap({ lat, lng, label }: LocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    let cancelled = false

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current, {
        center: [lat, lng],
        zoom: 15.7,
        zoomSnap: 0.1,
        scrollWheelZoom: false,
      })
      mapRef.current = map

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      const logoIcon = L.icon({
        iconUrl: "/logo-pin.png",
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -44],
        className: "location-map-pin",
      })

      L.marker([lat, lng], { icon: logoIcon }).addTo(map).bindPopup(label)
    })

    return () => {
      cancelled = true
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [lat, lng, label])

  return <div ref={containerRef} className="h-full w-full" />
}
