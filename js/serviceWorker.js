"use strict"

const staticAronDND = "Aron-Tracker-v1"
const assets = [
  "/",
  "/dndtracker-aron.html",
  "/css/style.css",
  "/js/app-aron.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAronDND).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })