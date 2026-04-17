"use client";

import React, { useContext, useState, useEffect, useCallback } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";

export default function EventsPage() {
  const { darkMode } = useContext(ThemeContext);

  const bgClass = darkMode ? "bg-gray-900" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";
  const borderClass = darkMode ? "border-gray-800" : "border-gray-200";
  const subtleTextClass = darkMode ? "text-gray-400" : "text-gray-500";

  const events = [
    {
      key: "suihub",
      title: "SuiHub 1st in-person Hackathon",
      role: "Dubai - Winner",
      date: "May 2025",
      description: "I was invited to fly to Dubai's Suihub HQ to participate in their first in-person Move Workshop. They announced a Hackathon during the event, and I won the first place in the hackathon.",
      photos: [
        { src: "/EventPictures/SuiHubDubaiHackathonWinningMarch2025/PresentingSuiHubWinningProjectMay2025.jpeg" },
        { src: "/EventPictures/SuiHubDubaiHackathonWinningMarch2025/PresentingSuiHubWinningProject3May2025.jpeg" },
        { src: "/EventPictures/SuiHubDubaiHackathonWinningMarch2025/WinningAnnouncement.jpeg", contain: true },
        { src: "/EventPictures/SuiHubDubaiHackathonWinningMarch2025/PresentingSuiHubWinningProject4May2025.jpeg", contain: true },
        { src: "/EventPictures/SuiHubDubaiHackathonWinningMarch2025/PresentingSuiHubWinningProject2May2025.jpeg" },
      ],
    },
    {
      key: "mondad",
      title: "Mondad Hackathon",
      role: "São Paulo and Rio - Mentor",
      date: "March 2026",
      description: "I was invited to be a mentor for both Mondad Hackathon's that happened in Brazil. During 2 weekends I presented what Monad's blockchain arquitecture and mentored over 80 participants by helping them in idea definition, implementation, and presentation.",
      photos: [
        { src: "/EventPictures/MondadHackathonMentoringMarch2026/MondadMentoringMar20206.jpeg" },
        { src: "/EventPictures/MondadHackathonMentoringMarch2026/MondadMentoring2Mar20206.jpeg" },
        { src: "/EventPictures/MondadHackathonMentoringMarch2026/MondadMentoringMar32026.jpeg" },
      ],
    },
    {
      key: "devcon",
      title: "DevCon EigenCloud TheVault ",
      role: "Buenos Aires - Speaker",
      date: "2025",
      description: "I was invited to participate in EigenCloud's DevCon The Vault. I spent 1 week at Eigen Layers House developing a solution for Lunos and presented it to investors at the end of the week.",
      photos: [
        { src: "/EventPictures/PresentingLunosAtDevCon2025/PresentingLunosDevCon2025.jpeg" },
        { src: "/EventPictures/PresentingLunosAtDevCon2025/LunosDevConImage2.jpeg" },
        { src: "/EventPictures/PresentingLunosAtDevCon2025/LunosDevConImage3.jpeg" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const activeEvent = events[activeIndex];
  const photos = activeEvent.photos;
  const hasMany = photos.length > 1;

  const selectEvent = (idx) => {
    setActiveIndex(idx);
    setPhotoIndex(0);
  };

  const prevPhoto = useCallback(() => {
    setPhotoIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const nextPhoto = useCallback(() => {
    setPhotoIndex((i) => (i + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (!hasMany) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hasMany, prevPhoto, nextPhoto]);

  const listItemClass = (active) =>
    `w-full text-left px-4 py-3 rounded-lg transition-colors border ${
      active
        ? darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-100 border-gray-200"
        : darkMode
        ? "border-transparent hover:bg-gray-800/60"
        : "border-transparent hover:bg-gray-50"
    }`;

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} pt-14`}
      style={darkMode ? { backgroundColor: "#171717", color: "#e5e7eb" } : undefined}
    >
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl">
        <h1 className="text-2xl md:text-4xl font-serif font-semibold tracking-tight mb-1">
          Events
        </h1>
        <p className={`text-sm ${subtleTextClass} mb-8 md:mb-10`}>
          Speaking engagements and hackathons.
        </p>

        <div className="flex flex-col md:flex-row md:gap-10">
          {/* Left: event list */}
          <aside className="md:w-72 flex-shrink-0 mb-6 md:mb-0">
            <ul className="space-y-1">
              {events.map((event, idx) => {
                const active = idx === activeIndex;
                return (
                  <li key={event.key}>
                    <button
                      onClick={() => selectEvent(idx)}
                      className={listItemClass(active)}
                      aria-pressed={active}
                    >
                      <div
                        className="font-semibold text-base"
                        style={active ? { color: "#f97316" } : undefined}
                      >
                        {event.title}
                      </div>
                      <div className={`text-sm mt-0.5 ${subtleTextClass}`}>
                        {event.role} · {event.date}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Right: active event detail */}
          <section className="flex-1 min-w-0">
            {/* Image carousel */}
            <div className="relative group mb-6 mx-auto" style={{ maxWidth: "70%" }}>
              <div
                className={`rounded-xl overflow-hidden border ${borderClass}`}
                style={{
                  aspectRatio: "3 / 2",
                  backgroundColor: darkMode ? "#1f1f20" : "#f8f8f8",
                }}
              >
                <img
                  key={photos[photoIndex].src}
                  src={photos[photoIndex].src}
                  alt={`${activeEvent.title} — ${activeEvent.role}, ${activeEvent.date} (${photoIndex + 1} of ${photos.length})`}
                  className={`w-full h-full ${photos[photoIndex].contain ? "object-contain" : "object-cover object-center"}`}
                />
              </div>

              {hasMany && (
                <>
                  <button
                    onClick={prevPhoto}
                    aria-label="Previous image"
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full border shadow-md flex items-center justify-center transition-all hover:scale-105 ${
                      darkMode
                        ? "bg-gray-900/90 border-gray-700 text-gray-100 hover:bg-gray-800"
                        : "bg-white/90 border-gray-300 text-gray-800 hover:bg-white"
                    }`}
                    style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
                  >
                    <i className="fas fa-chevron-left text-sm"></i>
                  </button>
                  <button
                    onClick={nextPhoto}
                    aria-label="Next image"
                    className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full border shadow-md flex items-center justify-center transition-all hover:scale-105 ${
                      darkMode
                        ? "bg-gray-900/90 border-gray-700 text-gray-100 hover:bg-gray-800"
                        : "bg-white/90 border-gray-300 text-gray-800 hover:bg-white"
                    }`}
                    style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
                  >
                    <i className="fas fa-chevron-right text-sm"></i>
                  </button>
                  <div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                    }}
                  >
                    {photoIndex + 1} / {photos.length}
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-1">{activeEvent.title}</h2>
              <div className={`text-sm mb-4 ${subtleTextClass}`}>
                {activeEvent.role} · {activeEvent.date}
              </div>
              {activeEvent.description ? (
                <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {activeEvent.description}
                </p>
              ) : (
                <p className={`text-sm italic ${subtleTextClass}`}>
                  Description coming soon.
                </p>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
