import { useState, useMemo, useEffect, useRef } from "react";

const CONF_COLORS = { NORTH: "#dc2626", EAST: "#059669", WEST: "#d97706", SOUTH: "#2563eb" };
const CONF_BG = { NORTH: "linear-gradient(135deg,#7f1d1d,#dc2626)", EAST: "linear-gradient(135deg,#064e3b,#059669)", WEST: "linear-gradient(135deg,#78350f,#d97706)", SOUTH: "linear-gradient(135deg,#1e3a5f,#2563eb)" };

const Logo = ({ team, size = 60 }) => {
  const s = size;
  const logos = {
    "Kashmir Snow Leopards": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="ksl" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a5f3fc"/><stop offset="100%" stopColor="#0e7490"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#ksl)" stroke="#fff" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28" fill="#fff">🐆</text>
        <text x="50" y="58" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">SNOW</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#cffafe">LEOPARDS</text>
        <path d="M20 80 Q50 90 80 80" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
    "Himachal Pine Eagles": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="hpe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#166534"/><stop offset="100%" stopColor="#4ade80"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#hpe)" stroke="#fff" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦅</text>
        <text x="50" y="58" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">PINE</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#bbf7d0">EAGLES</text>
        <polygon points="50,82 44,92 56,92" fill="#4ade80" opacity="0.6"/>
      </svg>
    ),
    "Dehradun Devbhoomi Kings": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="ddk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#f59e0b"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#ddk)" stroke="#fbbf24" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">👑</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">DEVBHOOMI</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fef3c7">KINGS</text>
      </svg>
    ),
    "Ladakh Ice Warriors": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="liw" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e3a5f"/><stop offset="100%" stopColor="#38bdf8"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#liw)" stroke="#7dd3fc" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="26">🧊</text>
        <text x="50" y="58" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">ICE</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#bae6fd">WARRIORS</text>
        <path d="M30 84 L40 78 L50 84 L60 78 L70 84" fill="none" stroke="#7dd3fc" strokeWidth="1.5"/>
      </svg>
    ),
    "Lucknow Super Giants": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="lsg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0e7490"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#lsg)" stroke="#67e8f9" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦸</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">SUPER</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#cffafe">GIANTS</text>
      </svg>
    ),
    "Delhi Capitals": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="dc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e3a8a"/><stop offset="100%" stopColor="#dc2626"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#dc)" stroke="#fca5a5" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🏛️</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">DELHI</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fecaca">CAPITALS</text>
      </svg>
    ),
    "Punjab Kings": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="pk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#991b1b"/><stop offset="100%" stopColor="#ef4444"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#pk)" stroke="#fca5a5" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦁</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">PUNJAB</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fecaca">KINGS</text>
      </svg>
    ),
    "Haryana Steelhawks": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="hs" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#374151"/><stop offset="100%" stopColor="#9ca3af"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#hs)" stroke="#d1d5db" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦅</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">STEEL</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#e5e7eb">HAWKS</text>
      </svg>
    ),
    "Chandigarh Chargers": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="cc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4338ca"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#cc)" stroke="#c4b5fd" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">⚡</text>
        <text x="50" y="60" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">CHARGERS</text>
      </svg>
    ),
    "Kolkata Knight Riders": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="kkr" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4a1d96"/><stop offset="100%" stopColor="#fbbf24"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#kkr)" stroke="#fbbf24" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🏇</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">KNIGHT</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fef3c7">RIDERS</text>
      </svg>
    ),
    "Bhubaneswar Cyclones": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="bc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0f766e"/><stop offset="100%" stopColor="#2dd4bf"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#bc)" stroke="#5eead4" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🌀</text>
        <text x="50" y="60" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">CYCLONES</text>
      </svg>
    ),
    "Ranchi Rhinos": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="rr2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#365314"/><stop offset="100%" stopColor="#84cc16"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#rr2)" stroke="#a3e635" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦏</text>
        <text x="50" y="58" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">RANCHI</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#d9f99d">RHINOS</text>
      </svg>
    ),
    "Patna Tigers": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="pt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#f97316"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#pt)" stroke="#fdba74" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🐅</text>
        <text x="50" y="58" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">PATNA</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fed7aa">TIGERS</text>
      </svg>
    ),
    "Andaman Sea Hawks": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="ash" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#164e63"/><stop offset="100%" stopColor="#22d3ee"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#ash)" stroke="#67e8f9" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🌊</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">SEA</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#a5f3fc">HAWKS</text>
      </svg>
    ),
    "Guwahati Rhino Chargers": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="grc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#22c55e"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#grc)" stroke="#86efac" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦏</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">RHINO</text>
        <text x="50" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#bbf7d0">CHARGERS</text>
      </svg>
    ),
    "Shillong Cloud Raiders": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="scr" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#475569"/><stop offset="100%" stopColor="#e2e8f0"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#scr)" stroke="#f1f5f9" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">☁️</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#1e293b">CLOUD</text>
        <text x="50" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#334155">RAIDERS</text>
      </svg>
    ),
    "Kohima Hornbills": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="kh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7c2d12"/><stop offset="100%" stopColor="#ea580c"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#kh)" stroke="#fb923c" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🐦</text>
        <text x="50" y="60" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">HORNBILLS</text>
      </svg>
    ),
    "Imphal Warriors": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="iw" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4c1d95"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#iw)" stroke="#c4b5fd" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">⚔️</text>
        <text x="50" y="60" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">WARRIORS</text>
      </svg>
    ),
    "Agartala Royal Bengals": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="arb" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#854d0e"/><stop offset="100%" stopColor="#eab308"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#arb)" stroke="#fde047" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🐯</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">ROYAL</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fef9c3">BENGALS</text>
      </svg>
    ),
    "Aizawl Falcons": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="af" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e3a5f"/><stop offset="100%" stopColor="#60a5fa"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#af)" stroke="#93c5fd" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦅</text>
        <text x="50" y="60" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">FALCONS</text>
      </svg>
    ),
    "Itanagar Dawn Breakers": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="idb" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#9a3412"/><stop offset="100%" stopColor="#fb923c"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#idb)" stroke="#fdba74" strokeWidth="2"/>
        <text x="50" y="36" textAnchor="middle" fontSize="26">🌅</text>
        <text x="50" y="58" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#fff">DAWN</text>
        <text x="50" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fed7aa">BREAKERS</text>
      </svg>
    ),
    "Gangtok Kanchenjunga XI": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="gk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f0f9ff"/><stop offset="100%" stopColor="#38bdf8"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#gk)" stroke="#7dd3fc" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🏔️</text>
        <text x="50" y="58" textAnchor="middle" fontSize="5" fontWeight="900" fill="#0c4a6e">KANCHENJUNGA</text>
        <text x="50" y="70" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0369a1">XI</text>
      </svg>
    ),
    "Rajasthan Royals": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="rrr" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#be185d"/><stop offset="100%" stopColor="#ec4899"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#rrr)" stroke="#f9a8d4" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">👑</text>
        <text x="50" y="60" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">ROYALS</text>
      </svg>
    ),
    "Gujarat Titans": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="gt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e3a5f"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#gt)" stroke="#93c5fd" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">💪</text>
        <text x="50" y="60" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">TITANS</text>
      </svg>
    ),
    "Mumbai Indians": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="mi" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e3a8a"/><stop offset="100%" stopColor="#2563eb"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#mi)" stroke="#93c5fd" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🌊</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fbbf24">MUMBAI</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#bfdbfe">INDIANS</text>
      </svg>
    ),
    "Goa Beach Blasters": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="gbb" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c2410c"/><stop offset="100%" stopColor="#fbbf24"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#gbb)" stroke="#fde68a" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🏖️</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">BEACH</text>
        <text x="50" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef3c7">BLASTERS</text>
      </svg>
    ),
    "Daman Coastal Titans": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="dct" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#155e75"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#dct)" stroke="#67e8f9" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🌊</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">COASTAL</text>
        <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#a5f3fc">TITANS</text>
      </svg>
    ),
    "Indore Tigers": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="it" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#78350f"/><stop offset="100%" stopColor="#f59e0b"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#it)" stroke="#fcd34d" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🐅</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">INDORE</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fef3c7">TIGERS</text>
      </svg>
    ),
    "Raipur Jungle Kings": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="rjk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#16a34a"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#rjk)" stroke="#4ade80" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🌳</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">JUNGLE</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#bbf7d0">KINGS</text>
      </svg>
    ),
    "Chennai Super Kings": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="csk" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a16207"/><stop offset="100%" stopColor="#facc15"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#csk)" stroke="#fde047" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🦁</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">SUPER</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fef9c3">KINGS</text>
      </svg>
    ),
    "Royal Challengers Bengaluru": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="rcb" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7f1d1d"/><stop offset="100%" stopColor="#ef4444"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#rcb)" stroke="#fca5a5" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🔴</text>
        <text x="50" y="58" textAnchor="middle" fontSize="5" fontWeight="900" fill="#fbbf24">CHALLENGERS</text>
        <text x="50" y="70" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fecaca">BENGALURU</text>
      </svg>
    ),
    "Kochi Tuskers Reborn": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="ktr" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7c2d12"/><stop offset="100%" stopColor="#ea580c"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#ktr)" stroke="#fb923c" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🐘</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">TUSKERS</text>
        <text x="50" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fed7aa">REBORN</text>
      </svg>
    ),
    "Puducherry French Flickers": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="pff" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e3a8a"/><stop offset="100%" stopColor="#dc2626"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#pff)" stroke="#fff" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">⚜️</text>
        <text x="50" y="58" textAnchor="middle" fontSize="5" fontWeight="900" fill="#fff">FRENCH</text>
        <text x="50" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fecaca">FLICKERS</text>
      </svg>
    ),
    "Lakshadweep Island Strikers": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="lis" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0e7490"/><stop offset="100%" stopColor="#2dd4bf"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#lis)" stroke="#5eead4" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🏝️</text>
        <text x="50" y="58" textAnchor="middle" fontSize="5" fontWeight="900" fill="#fff">ISLAND</text>
        <text x="50" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#99f6e4">STRIKERS</text>
      </svg>
    ),
    "Sunrisers Hyderabad": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="srh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c2410c"/><stop offset="100%" stopColor="#f97316"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#srh)" stroke="#fdba74" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🌅</text>
        <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff">SUNRISERS</text>
        <text x="50" y="70" textAnchor="middle" fontSize="5" fontWeight="700" fill="#fed7aa">HYDERABAD</text>
      </svg>
    ),
    "Vizag Sea Riders": (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <defs><linearGradient id="vsr" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1e40af"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#vsr)" stroke="#93c5fd" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28">🚢</text>
        <text x="50" y="58" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fff">SEA</text>
        <text x="50" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#bfdbfe">RIDERS</text>
      </svg>
    )
  };
  return logos[team] || <svg viewBox="0 0 100 100" width={s} height={s}><circle cx="50" cy="50" r="46" fill="#334155" stroke="#fff" strokeWidth="2"/><text x="50" y="55" textAnchor="middle" fontSize="10" fill="#fff">{team.slice(0,3)}</text></svg>;
};

const teams = [
  { name:"Kashmir Snow Leopards",state:"Jammu & Kashmir",conf:"NORTH",div:"Himalayan",venue:"Sher-i-Kashmir Stadium, Srinagar",
    indian:["Umran Malik","Rasikh Salam","Abdul Samad","Manzoor Dar","Abid Mushtaq","Parvez Rasool","Shubham Khajuria","Auqib Nabi","Umar Nazir","Ram Dayal","Vivrant Sharma","Aquib Khan","Sahil Sharma","Mayank Dagar","Mujtaba Yousuf"],
    overseas:["Babar Azam","Trent Boult","Shimron Hetmyer","Adam Zampa","Finn Allen","Wanindu Hasaranga","Marco Jansen"],star:"Babar Azam",rating:82},
  { name:"Himachal Pine Eagles",state:"Himachal Pradesh",conf:"NORTH",div:"Himalayan",venue:"HPCA Stadium, Dharamsala",
    indian:["Rishi Dhawan","Vaibhav Arora","Ankush Bains","Prashant Chopra","Kanwar Abhinay","Ekant Sen","Mayank Rawat","Sidharth Sharma","Akash Vashisht","Vinay Galetiya","Abhimanyu Rajput","Raghav Dhawan","Nikhil Gangta","Pankaj Jaswal","Sunilshetty Patel"],
    overseas:["Kane Williamson","Shaheen Afridi","Devon Conway","Rassie van der Dussen","Mark Wood","Maheesh Theekshana","Tim David"],star:"Shaheen Afridi",rating:79},
  { name:"Dehradun Devbhoomi Kings",state:"Uttarakhand",conf:"NORTH",div:"Himalayan",venue:"Rajiv Gandhi Intl Cricket Stadium, Dehradun",
    indian:["Karanveer Kaushal","Dikshanshu Negi","Jay Bista","Kunal Chandela","Samad Fallah","Swapnil Singh","Iqbal Abdullah","Aditya Tare","Jiwanjot Singh","Ankit Rajpoot","Varun Aaron","Avesh Khan","Himanshu Sharma","Priyam Garg","Agrim Tiwari"],
    overseas:["Glenn Maxwell","Anrich Nortje","Charith Asalanka","Marcus Stoinis","Josh Hazlewood","Sikandar Raza","Blessing Muzarabani"],star:"Glenn Maxwell",rating:81},
  { name:"Ladakh Ice Warriors",state:"Ladakh",conf:"NORTH",div:"Himalayan",venue:"Khaltse Cricket Ground, Leh",
    indian:["Mohammed Shami","Rinku Singh","Nitish Rana","Kuldeep Yadav","Tushar Deshpande","Ishant Sharma","Anmolpreet Singh","Harpreet Brar","Kumar Kartikeya","Yash Thakur","Himanshu Chauhan","Lalit Yadav","Saurabh Kumar","Aman Khan","Arafat Khan"],
    overseas:["Jos Buttler","Kagiso Rabada","Rashid Khan","Mitchell Starc","Heinrich Klaasen","Dasun Shanaka","Lockie Ferguson"],star:"Jos Buttler",rating:91},
  { name:"Lucknow Super Giants",state:"Uttar Pradesh",conf:"NORTH",div:"Heartland",venue:"BRSABV Ekana Stadium, Lucknow",
    indian:["KL Rahul","Ravi Bishnoi","Ayush Badoni","Deepak Hooda","Krunal Pandya","Mohsin Khan","Manan Vohra","Yash Dhull","Mayank Yadav","Arshin Kulkarni","Garv Sangwan","Shaswat Rawat","Aryan Juyal","Digvesh Rathi","Avnish Arora"],
    overseas:["Nicholas Pooran","Kyle Mayers","Matt Henry","Reece Topley","David Miller","Mujeeb Ur Rahman","Fakhar Zaman"],star:"KL Rahul",rating:84},
  { name:"Delhi Capitals",state:"Delhi",conf:"NORTH",div:"Heartland",venue:"Arun Jaitley Stadium, New Delhi",
    indian:["Rishabh Pant","Axar Patel","Prithvi Shaw","Khaleel Ahmed","Kamlesh Nagarkoti","Riyan Parag","Sumit Kumar","Lakshay Rawat","Himmat Singh","Harsh Tyagi","Saurabh Dubey","Vipraj Nigam","Pranav Rajvanshi","Abishek Porel","Gurnoor Brar"],
    overseas:["Jake Fraser-McGurk","Mitchell Marsh","Lungi Ngidi","Phil Salt","Shai Hope","Mustafizur Rahman","Tom Hartley"],star:"Rishabh Pant",rating:87},
  { name:"Punjab Kings",state:"Punjab",conf:"NORTH",div:"Heartland",venue:"PCA New Stadium, Mullanpur",
    indian:["Shikhar Dhawan","Arshdeep Singh","Jitesh Sharma","Rahul Chahar","Prabhsimran Singh","Baltej Singh","Abhishek Sharma","Shahrukh Khan","Atharva Taide","Vidhwath Kaverappa","Ansh Patel","Harpreet Bhatia","Rishi Dhawan","Sikandar Raza","Gurnoor Brar"],
    overseas:["Liam Livingstone","Sam Curran","Jonny Bairstow","Nathan Ellis","Adil Rashid","Rovman Powell","Matthew Short"],star:"Sam Curran",rating:80},
  { name:"Haryana Steelhawks",state:"Haryana",conf:"NORTH",div:"Heartland",venue:"Nahar Singh Stadium, Faridabad",
    indian:["Yuzvendra Chahal","Rahul Tewatia","Mohit Sharma","Harshal Patel","Amit Mishra","Jayant Yadav","Shivam Mavi","Rahul Dalal","Pramod Chandila","Ankit Kumar","Sumit Narwal","Ajit Chahal","Nishant Sindhu","Himanshu Rana","Kapil Hooda"],
    overseas:["David Warner","Pat Cummins","Shadab Khan","Dwaine Pretorius","Gerald Coetzee","Daniel Sams","Daryl Mitchell"],star:"David Warner",rating:85},
  { name:"Chandigarh Chargers",state:"Chandigarh",conf:"NORTH",div:"Heartland",venue:"Sector 16 Cricket Stadium, Chandigarh",
    indian:["Mandeep Singh","Sandeep Sharma","Barinder Sran","Uday Saharan","Anmol Malhotra","Raj Bawa","Naman Dhir","Krish Bhagat","Sahil Jain","Abhay Sharma","Gurkeerat Singh Mann","Dhruv Jurel","Nehal Wadhera","Jaskaranvir Singh","Abhay Choudhary"],
    overseas:["Ben Stokes","Haris Rauf","Travis Head","Josh Inglis","Akeal Hosein","Tanzim Hasan Sakib","Brandon King"],star:"Ben Stokes",rating:86},
  { name:"Kolkata Knight Riders",state:"West Bengal",conf:"EAST",div:"Bay of Bengal",venue:"Eden Gardens, Kolkata",
    indian:["Shreyas Iyer","Venkatesh Iyer","Varun Chakravarthy","Anukul Roy","Harshit Rana","Ramandeep Singh","Suyash Sharma","Manish Pandey","Writtick Chatterjee","Pratham Singh","Kanishk Seth","Angkrish Raghuvanshi","Dhrushant Soni","Aman Hakim Khan","Nitish Rana"],
    overseas:["Andre Russell","Sunil Narine","Jason Holder","Sam Billings","Chris Jordan","Rahmanullah Gurbaz","Mitchell Santner"],star:"Andre Russell",rating:86},
  { name:"Bhubaneswar Cyclones",state:"Odisha",conf:"EAST",div:"Bay of Bengal",venue:"Barabati Stadium, Cuttack",
    indian:["Subhranshu Senapati","Govind Poddar","Rajesh Mohanty","Biplab Samantray","Deepak Behera","Pappu Roy","Alok Sahoo","Debabrata Pradhan","Anurag Sarangi","Suryakant Pradhan","Girija Rout","Abhishek Raut","Rakesh Patra","Tarini Sa","Basant Mohanty"],
    overseas:["Alzarri Joseph","Romario Shepherd","Matthew Wade","Shakib Al Hasan","Oshane Thomas","Tabraiz Shamsi","Regis Chakabva"],star:"Shakib Al Hasan",rating:72},
  { name:"Ranchi Rhinos",state:"Jharkhand",conf:"EAST",div:"Bay of Bengal",venue:"JSCA Intl Stadium, Ranchi",
    indian:["MS Dhoni","Ishan Kishan","Shahbaz Nadeem","Saurabh Tiwary","Kumar Kushagra","Supriyo Chakraborty","Utkarsh Singh","Virat Singh","Monu Kumar","Rahul Shukla","Bal Krishna","Anukul Roy","Aryaman Sen","Nazim Siddiqui","Ashish Kumar"],
    overseas:["Faf du Plessis","Dwayne Bravo","Tim Southee","Alex Hales","Kusal Perera","Wiaan Mulder","Olly Stone"],star:"MS Dhoni",rating:78},
  { name:"Patna Tigers",state:"Bihar",conf:"EAST",div:"Bay of Bengal",venue:"Moin-ul-Haq Stadium, Patna",
    indian:["Sakibul Gani","Kabir Khan","Ashutosh Aman","Mangal Mahrour","Babul Kumar","Md Rahmatullah","Harsh Singh","Bipin Saurabh","Surya Prakash","Veer Pratap Singh","Samar Quadri","Tabrez Khan","Vikash Ranjan","Sachin Rana","Aditya Dey"],
    overseas:["Glenn Phillips","Ish Sodhi","Odean Smith","Hayden Walsh Jr","Mohammad Nabi","Shoriful Islam","Kyle Jamieson"],star:"Glenn Phillips",rating:68},
  { name:"Andaman Sea Hawks",state:"Andaman & Nicobar",conf:"EAST",div:"Bay of Bengal",venue:"Ambedkar Stadium, Port Blair",
    indian:["Wriddhiman Saha","Jaydev Unadkat","Sheldon Jackson","Chirag Jani","Arzan Nagwaswalla","Het Patel","Priyank Panchal","Karan Patel","Snell Patel","Harvik Desai","Siddharth Desai","Rujul Bhatt","Ripal Patel","Kartik Kakade","Chintan Gaja"],
    overseas:["Colin Munro","Imad Wasim","Carlos Brathwaite","Khushdil Shah","Billy Stanlake","Soumya Sarkar","Nasum Ahmed"],star:"Wriddhiman Saha",rating:65},
  { name:"Guwahati Rhino Chargers",state:"Assam",conf:"EAST",div:"Northeast",venue:"ACA Stadium, Barsapara, Guwahati",
    indian:["Riyan Parag","Abu Nechim","Arup Das","Rishav Das","Kunal Saikia","Rajjakuddin Ahmed","Pritam Das","Denish Das","Amit Sinha","Gokul Sharma","Wasiqur Rahman","Pallavkumar Das","Ranjit Mali","Rahul Singh","Mukhtar Hussain"],
    overseas:["Jofra Archer","Kieron Pollard","Lahiru Kumara","Noor Ahmad","James Neesham","Roston Chase","Devon Thomas"],star:"Jofra Archer",rating:76},
  { name:"Shillong Cloud Raiders",state:"Meghalaya",conf:"EAST",div:"Northeast",venue:"JN Sports Complex, Shillong",
    indian:["Abhimanyu Easwaran","Sudip Chatterjee","Mukesh Kumar","Akash Deep","Shahbaz Ahmed","Ravi Yadav","Pradipta Pramanik","Sandipan Das","Abhishek Das","Kazi Saifi","Suraj Jaiswal","Aamir Gani","Kanishk Rajput","Debojit Saha","Subhrajit Saha"],
    overseas:["Daryl Mitchell","Litton Das","George Linde","Nuwan Thushara","Dilshan Madushanka","Ben Duckett","Charith Asalanka"],star:"Ben Duckett",rating:70},
  { name:"Kohima Hornbills",state:"Nagaland",conf:"EAST",div:"Northeast",venue:"Kohima Local Ground",
    indian:["Hokaito Zhimomi","Shrikant Mundhe","Rongsen Jonathan","Chetan Bist","Khrievitso Kense","Sedezhalie Ruopfuzhie","Imliwati Lemtur","Stuart Binny","Robin Uthappa","Rajat Bhatia","Aniket Choudhary","Techi Neri","Chetan Sakariya","Pawan Suyal","Tahmeed Rahman"],
    overseas:["AB de Villiers","Dale Steyn","Corey Anderson","Aiden Markram","Tymal Mills","Sheldon Cottrell","Lasith Malinga"],star:"AB de Villiers",rating:74},
  { name:"Imphal Warriors",state:"Manipur",conf:"EAST",div:"Northeast",venue:"Luwangpokpa Cricket Stadium, Imphal",
    indian:["Yashpal Singh","Bishworjit Konthoujam","Rex Singh","Nitesh Sedai","Al Bashid Muhammed","Nganba Meitei","Bonbon Meitei","L Kishan Singha","Karnajit Yumnam","Johnson Singh","Kangabam Priyokumar","Lakhan Singh","P Naveen","Priyojit Singh","Langlonyamba Meitan"],
    overseas:["Paul Stirling","Colin de Grandhomme","Rubel Hossain","Gudakesh Motie","Afif Hossain","Chamika Karunaratne","Oshane Thomas"],star:"Paul Stirling",rating:64},
  { name:"Agartala Royal Bengals",state:"Tripura",conf:"EAST",div:"Northeast",venue:"MBB College Ground, Agartala",
    indian:["Manisankar Murasingh","Udiyan Bose","Bishal Ghosh","Milind Kumar","Smit Patel","KB Arun Karthik","Harmeet Singh","Swapnil Gugale","Ankeet Bawne","Tanmay Agarwal","Ashok Menaria","Pawan Negi","Akshay Wakhare","Rishi Arothe","Pratyush Singh"],
    overseas:["Pathum Nissanka","Angelo Mathews","Dunith Wellalage","Bhanuka Rajapaksa","Dushmantha Chameera","Thisara Perera","Lasith Embuldeniya"],star:"Pathum Nissanka",rating:69},
  { name:"Aizawl Falcons",state:"Mizoram",conf:"EAST",div:"Northeast",venue:"Suaka Stadium, Aizawl",
    indian:["Taruwar Kohli","Puneet Bisht","Amitoze Singh","Arjun Tendulkar","Tejinder Negi","Raghav Goyal","Divyaansh Saxena","Siddhesh Lad","Tanush Kotian","Paras Dogra","Manan Sharma","Shivam Chauhan","KB Pawan","Atit Sheth","Yuvraj Chudasama"],
    overseas:["Rachin Ravindra","Mark Chapman","Jacob Duffy","Adam Milne","Niroshan Dickwella","Isuru Udana","Wanindu Hasaranga"],star:"Rachin Ravindra",rating:67},
  { name:"Itanagar Dawn Breakers",state:"Arunachal Pradesh",conf:"EAST",div:"Northeast",venue:"Rajiv Gandhi Stadium, Naharlagun",
    indian:["Ruturaj Gaikwad","Deepak Chahar","Manoj Tiwary","Shreevats Goswami","Sudip Gharami","Ritwik Roy Chowdhury","Ayan Bhattacharjee","Subham Sarkar","Koushik Ghosh","Md Kaif","Sayan Ghosh","Prayas Barman","Debopratim Halder","Writtick Chatterjee","Rajvardhan Hangargekar"],
    overseas:["Dewald Brevis","Reeza Hendricks","Tristan Stubbs","Ryan Rickelton","Dane Paterson","Matheesha Pathirana","Wiaan Mulder"],star:"Ruturaj Gaikwad",rating:77},
  { name:"Gangtok Kanchenjunga XI",state:"Sikkim",conf:"EAST",div:"Northeast",venue:"Mining Cricket Ground, Rangpo",
    indian:["Bipul Sharma","Pankaj Jaiswal","Ashok Dinda","Laxmi Ratan Shukla","Sayan Mondal","Debabrata Das","Arnab Nandi","Akash Parkar","Sachin Baby","Sandeep Warrier","Mohammed Azharuddeen","Vathsal Govind","Rohan Kunnummal","Syed Mohammad","Sumit Ghadigaonkar"],
    overseas:["Chris Gayle","Shane Watson","Brendon McCullum","Daniel Vettori","Kumar Sangakkara","Mahela Jayawardene","Muttiah Muralitharan"],star:"Chris Gayle",rating:75},
  { name:"Rajasthan Royals",state:"Rajasthan",conf:"WEST",div:"Desert & Coast",venue:"Sawai Mansingh Stadium, Jaipur",
    indian:["Sanju Samson","Yashasvi Jaiswal","Ravichandran Ashwin","Dhruv Jurel","Kuldeep Sen","Navdeep Saini","KC Cariappa","Akash Madhwal","Kunal Rathore","Abdul Basith","Pranav Rajvanshi","Tanush Kotian","Nandre Burger","Keshav Maharaj","Riyan Parag"],
    overseas:["Shimron Hetmyer","Trent Boult","Joe Root","Jason Holder","Obed McCoy","Donovan Ferreira","Leus du Plooy"],star:"Yashasvi Jaiswal",rating:85},
  { name:"Gujarat Titans",state:"Gujarat",conf:"WEST",div:"Desert & Coast",venue:"Narendra Modi Stadium, Ahmedabad",
    indian:["Hardik Pandya","Shubman Gill","Abhinav Manohar","Yash Dayal","Sai Sudharsan","Urvil Patel","Sai Kishore","Manav Suthar","Rahul Tewatia","Kartik Tyagi","Vijay Shankar","Sushant Mishra","Darshan Nalkande","Pradeep Sangwan","Mohit Sharma"],
    overseas:["Rashid Khan","Kane Williamson","Matthew Wade","Josh Little","Alzarri Joseph","Mohammad Nabi","Noor Ahmad"],star:"Shubman Gill",rating:88},
  { name:"Mumbai Indians",state:"Maharashtra",conf:"WEST",div:"Desert & Coast",venue:"Wankhede Stadium, Mumbai",
    indian:["Rohit Sharma","Jasprit Bumrah","Suryakumar Yadav","Ishan Kishan","Tilak Varma","Hrithik Shokeen","Vishnu Vinod","Shams Mulani","Dhawal Kulkarni","Sarfaraz Khan","Tushar Deshpande","Arjun Tendulkar","Raghav Goyal","Nehal Wadhera","Tanush Kotian"],
    overseas:["Tim David","Dewald Brevis","Tristan Stubbs","Cameron Green","Riley Meredith","Daniel Sams","Romario Shepherd"],star:"Jasprit Bumrah",rating:93},
  { name:"Goa Beach Blasters",state:"Goa",conf:"WEST",div:"Desert & Coast",venue:"Fatorda Stadium, Margao",
    indian:["Devdutt Padikkal","Shreyas Gopal","Amit Verma","Darshan Misal","Felix Alemao","Suyash Prabhudessai","Eknath Kerkar","Vaibhav Govekar","Deepraj Gaonkar","Arjun Verma","Shubham Ranjane","Daryl Ferrario","Shadab Jakati","Siddhesh Lad","Lakshay Garg"],
    overseas:["Chris Lynn","Rilee Rossouw","Fabian Allen","Mohammad Amir","Aaron Finch","Sean Abbott","Andre Fletcher"],star:"Devdutt Padikkal",rating:71},
  { name:"Daman Coastal Titans",state:"Daman & Diu",conf:"WEST",div:"Desert & Coast",venue:"Daman District Ground",
    indian:["Cheteshwar Pujara","Ravindra Jadeja","Jaydev Unadkat","Prerak Mankad","Samarth Vyas","Vishvaraj Jadeja","Arpit Vasavada","Dhairya Pandya","Vasu Vala","Chetan Sakariya","Priyank Panchal","Chirag Gandhi","Hardik Patel","Jyotsnil Singh","Snell Patel"],
    overseas:["Nicholas Pooran","Evin Lewis","Lendl Simmons","Wayne Parnell","Moeen Ali","Tom Curran","Dwaine Pretorius"],star:"Ravindra Jadeja",rating:79},
  { name:"Indore Tigers",state:"Madhya Pradesh",conf:"WEST",div:"Central",venue:"Holkar Cricket Stadium, Indore",
    indian:["Venkatesh Iyer","Avesh Khan","Rajat Patidar","Kumar Kartikeya","Akshat Raghuwanshi","Mihir Hirwani","Puneet Datey","Rameez Khan","Gourav Yadav","Ankit Dane","Saransh Jain","Harsh Gawli","Parth Sahani","Anirudh Joshi","Kuldeep Sen"],
    overseas:["Liam Livingstone","Chris Woakes","Dawid Malan","Phil Salt","Ben McDermott","Nathan Coulter-Nile","Adil Rashid"],star:"Rajat Patidar",rating:78},
  { name:"Raipur Jungle Kings",state:"Chhattisgarh",conf:"WEST",div:"Central",venue:"Shaheed VNS Intl Stadium, Raipur",
    indian:["Shashank Singh","Amandeep Khare","Ajay Mandal","Vishal Kushwah","Sumit Ruikar","Shubham Agrawal","Ravi Kiran","Deepak Dhapola","Ashutosh Singh","Ayush Pandey","Rishabh Tiwari","Mayank Mishra","Harpreet Singh Bhatia","Veer Pratap","Jiwanjot Singh"],
    overseas:["Jason Roy","Alex Hales","Reece Topley","Jhye Richardson","Tom Curran","Moeen Ali","Wayne Parnell"],star:"Jason Roy",rating:73},
  { name:"Chennai Super Kings",state:"Tamil Nadu",conf:"SOUTH",div:"Peninsula",venue:"MA Chidambaram Stadium, Chennai",
    indian:["MS Dhoni","Ravindra Jadeja","Ruturaj Gaikwad","Shivam Dube","Deepak Chahar","Shaik Rasheed","Simarjeet Singh","Mukesh Choudhary","Nishant Sindhu","Ajinkya Rahane","Prashant Solanki","Avanish Aravelly","Subhranshu Senapati","Rajvardhan Hangargekar","Tushar Deshpande"],
    overseas:["Devon Conway","Ben Stokes","Maheesh Theekshana","Matheesha Pathirana","Kyle Jamieson","Daryl Mitchell","Gerald Coetzee"],star:"Ruturaj Gaikwad",rating:90},
  { name:"Royal Challengers Bengaluru",state:"Karnataka",conf:"SOUTH",div:"Peninsula",venue:"M Chinnaswamy Stadium, Bengaluru",
    indian:["Virat Kohli","Mohammed Siraj","Harshal Patel","Dinesh Karthik","Anuj Rawat","Suyash Prabhudessai","Shahbaz Ahmed","Karn Sharma","Akash Deep","Rajan Kumar","Sonu Yadav","Vyshak Vijaykumar","Mayank Dagar","KV Sasikanth","Devdutt Padikkal"],
    overseas:["Glenn Maxwell","Cameron Green","Wanindu Hasaranga","Josh Hazlewood","Faf du Plessis","Reece Topley","Alzarri Joseph"],star:"Virat Kohli",rating:92},
  { name:"Kochi Tuskers Reborn",state:"Kerala",conf:"SOUTH",div:"Peninsula",venue:"Greenfield Intl Stadium, Thiruvananthapuram",
    indian:["Sanju Samson","Basil Thampi","Sachin Baby","Mohammed Azharuddeen","Rohan Kunnummal","Vathsal Govind","Vishnu Vinod","Sijomon Joseph","Varun Nayanar","Salman Nizar","Edhen Tom","KC Akshay","Fazil Fanoos","Akhil Scaria","Monu Kumar"],
    overseas:["Rachin Ravindra","Mitchell Santner","Matt Henry","Mark Chapman","Anrich Nortje","Ben Duckett","Dane Paterson"],star:"Sanju Samson",rating:80},
  { name:"Puducherry French Flickers",state:"Puducherry",conf:"SOUTH",div:"Peninsula",venue:"Siechem Cricket Ground, Puducherry",
    indian:["Washington Sundar","Fabid Ahmed","Sagar Udeshi","Paras Dogra","KB Arun Karthik","Kannan Vignesh","Damodaran Rohit","Thamarai Kannan","Indrajith M","Jaganath Sinivas","Vikneshwaran M","A Amalraj","Sheldon Jackson","Ashith Rajiv","Raghu Sharma"],
    overseas:["Kusal Mendis","Dushmantha Chameera","Niroshan Dickwella","Pathum Nissanka","Dunith Wellalage","Bhanuka Rajapaksa","Isuru Udana"],star:"Washington Sundar",rating:70},
  { name:"Lakshadweep Island Strikers",state:"Lakshadweep",conf:"SOUTH",div:"Peninsula",venue:"Kavaratti Sports Ground",
    indian:["Dinesh Karthik","Natarajan T","Sai Kishore","Baba Indrajith","Jagadeesan N","Shahrukh Khan","Baba Aparajith","Hari Nishanth","Murugan Ashwin","Varun Chakravarthy","Aswin Crist","Sanjay Yadav","Laxmesha Suryaprakash","Pradosh Ranjan Paul","Manimaran Siddharth"],
    overseas:["Jhye Richardson","Riley Meredith","Matthew Kuhnemann","Sean Abbott","Nathan Coulter-Nile","Josh Philippe","Matthew Short"],star:"Dinesh Karthik",rating:72},
  { name:"Sunrisers Hyderabad",state:"Telangana",conf:"SOUTH",div:"Deccan",venue:"Rajiv Gandhi Intl Stadium, Hyderabad",
    indian:["Abhishek Sharma","Bhuvneshwar Kumar","Washington Sundar","Rahul Tripathi","Abdul Samad","Umran Malik","Kartik Tyagi","Mayank Agarwal","Tanmay Agarwal","T Ravi Teja","Sanvir Singh","Tilak Varma","Nitish Reddy","Prateek Jain","Saachi Anand"],
    overseas:["Travis Head","Pat Cummins","Aiden Markram","Marco Jansen","Glenn Phillips","Heinrich Klaasen","Adil Rashid"],star:"Travis Head",rating:89},
  { name:"Vizag Sea Riders",state:"Andhra Pradesh",conf:"SOUTH",div:"Deccan",venue:"ACA-VDCA Stadium, Visakhapatnam",
    indian:["Hanuma Vihari","Ricky Bhui","KS Bharat","Girinath Reddy","Manish Golamaru","Harishankar Reddy","Nitish Reddy","Srikar Bharat","Cheepurapalli Stephen","Dheeraj Kumar","Pasupuleti Sagar","Bodapati Sumanth","Ashwin Hebbar","Shoaib Md Khan","Prithvi Raj"],
    overseas:["David Warner","Jason Behrendorff","Adam Zampa","Marcus Stoinis","Ashton Agar","Josh Philippe","Aaron Finch"],star:"David Warner",rating:80}
];

const PLAYOFF_ROUNDS = [
  {round:"Regular Season",desc:"Each team plays ~14-16 games within conference. Top 4 from each conf qualify.",icon:"📋"},
  {round:"Wild Card Round",desc:"Seeds #3 vs #4 in each division — single eliminator. Winners advance.",icon:"🃏"},
  {round:"Conference Quarters",desc:"Top seed vs lowest remaining, 2nd vs next — best of 3.",icon:"⚡"},
  {round:"Conference Semis",desc:"4 remaining per conference — best of 3.",icon:"🔥"},
  {round:"Conference Finals",desc:"One champion per conference — best of 3.",icon:"🏅"},
  {round:"IPL SUPER BOWL",desc:"Final Four — N vs S, E vs W → Grand Final at rotating venue.",icon:"🏆"}
];

const tabs = ["HOME","TEAMS","STANDINGS","PLAYOFFS","MATCHDAY"];

export default function App() {
  const [tab, setTab] = useState("HOME");
  const [selConf, setSelConf] = useState("NORTH");
  const [selTeam, setSelTeam] = useState(null);
  const [matchTeams, setMatchTeams] = useState(null);
  const [matchBall, setMatchBall] = useState(0);
  const [matchScores, setMatchScores] = useState(null);
  const [simDone, setSimDone] = useState(false);
  const scrollRef = useRef(null);

  const confTeams = useMemo(() => teams.filter(t => t.conf === selConf), [selConf]);
  const sorted = useMemo(() => [...teams].sort((a,b) => b.rating - a.rating), []);
  const topTeams = sorted.slice(0,8);

  // Simulate quick match
  const simMatch = () => {
    const t1 = teams[Math.floor(Math.random()*teams.length)];
    let t2 = t1;
    while(t2.name===t1.name) t2 = teams[Math.floor(Math.random()*teams.length)];
    const s1 = Math.floor(120+Math.random()*80) ;
    const w1 = Math.floor(Math.random()*10);
    const s2 = Math.floor(100+Math.random()*90);
    const w2 = Math.floor(Math.random()*10);
    setMatchTeams([t1,t2]);
    setMatchScores([{runs:s1,wkts:Math.min(w1,10),overs:"20.0"},{runs:s2,wkts:Math.min(w2,10),overs:"20.0"}]);
    setMatchBall(0);
    setSimDone(true);
  };

  const renderHome = () => (
    <div>
      {/* Hero */}
      <div style={{background:"linear-gradient(135deg,#1e1b4b,#312e81,#4c1d95)",borderRadius:20,padding:"40px 30px",textAlign:"center",marginBottom:24,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"radial-gradient(circle at 30% 50%,rgba(251,191,36,0.15),transparent 60%)"}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{fontSize:48,marginBottom:8}}>🏏</div>
          <h1 style={{fontSize:32,fontWeight:900,margin:0,background:"linear-gradient(90deg,#fbbf24,#f59e0b,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            NFL-STYLE IPL
          </h1>
          <p style={{color:"#c4b5fd",fontSize:14,margin:"8px 0 0"}}>36 Teams • 4 Conferences • 8 Divisions • 792 Players</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:20,flexWrap:"wrap"}}>
            <div style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"12px 20px",backdropFilter:"blur(10px)"}}>
              <div style={{fontSize:24,fontWeight:900,color:"#fbbf24"}}>36</div>
              <div style={{fontSize:10,color:"#a5b4fc"}}>FRANCHISES</div>
            </div>
            <div style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"12px 20px"}}>
              <div style={{fontSize:24,fontWeight:900,color:"#34d399"}}>792</div>
              <div style={{fontSize:10,color:"#a5b4fc"}}>PLAYERS</div>
            </div>
            <div style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"12px 20px"}}>
              <div style={{fontSize:24,fontWeight:900,color:"#f87171"}}>252</div>
              <div style={{fontSize:10,color:"#a5b4fc"}}>OVERSEAS</div>
            </div>
            <div style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"12px 20px"}}>
              <div style={{fontSize:24,fontWeight:900,color:"#60a5fa"}}>560+</div>
              <div style={{fontSize:10,color:"#a5b4fc"}}>MATCHES</div>
            </div>
          </div>
        </div>
      </div>

      {/* Power Rankings */}
      <div style={{marginBottom:24}}>
        <h2 style={{fontSize:18,fontWeight:800,marginBottom:12,display:"flex",alignItems:"center",gap:8}}>
          <span style={{background:"#fbbf24",color:"#0f172a",borderRadius:8,padding:"2px 10px",fontSize:12}}>POWER</span> Top 8 Rankings
        </h2>
        <div style={{display:"grid",gap:8}}>
          {topTeams.map((t,i) => (
            <div key={i} onClick={() => {setSelTeam(t);setTab("TEAMS");}} style={{background:"#1e293b",borderRadius:14,padding:"12px 16px",display:"flex",alignItems:"center",gap:14,cursor:"pointer",border:"1px solid #334155",transition:"all 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.borderColor=CONF_COLORS[t.conf]}
              onMouseLeave={e=>e.currentTarget.style.borderColor="#334155"}>
              <span style={{fontSize:20,fontWeight:900,color:i<3?"#fbbf24":i<5?"#94a3b8":"#64748b",minWidth:28}}>#{i+1}</span>
              <Logo team={t.name} size={44}/>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:14}}>{t.name}</div>
                <div style={{fontSize:11,color:"#94a3b8"}}>⭐ {t.star} • {t.state}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:22,fontWeight:900,color:CONF_COLORS[t.conf]}}>{t.rating}</div>
                <div style={{fontSize:9,color:"#64748b"}}>PWR RATING</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Teams Scroll */}
      <h2 style={{fontSize:18,fontWeight:800,marginBottom:12}}>🏟️ All 36 Franchises</h2>
      <div ref={scrollRef} style={{display:"flex",gap:12,overflowX:"auto",paddingBottom:12,scrollbarWidth:"none"}}>
        {teams.map((t,i) => (
          <div key={i} onClick={() => {setSelTeam(t);setTab("TEAMS");}} style={{minWidth:130,background:"#1e293b",borderRadius:14,padding:16,textAlign:"center",cursor:"pointer",border:"1px solid #334155",flexShrink:0,transition:"all 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px)"}
            onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
            <Logo team={t.name} size={50}/>
            <div style={{fontSize:11,fontWeight:700,marginTop:8,lineHeight:1.3}}>{t.name}</div>
            <div style={{fontSize:9,color:"#64748b",marginTop:2}}>{t.state}</div>
            <div style={{fontSize:16,fontWeight:800,color:CONF_COLORS[t.conf],marginTop:4}}>{t.rating}</div>
          </div>
        ))}
      </div>

      {/* Quick Match CTA */}
      <div style={{marginTop:24,background:"linear-gradient(135deg,#065f46,#059669)",borderRadius:16,padding:"24px",textAlign:"center"}}>
        <div style={{fontSize:20,fontWeight:800,marginBottom:8}}>⚡ Quick Match Simulator</div>
        <p style={{color:"#a7f3d0",fontSize:13,margin:"0 0 16px"}}>Randomly pit two teams against each other!</p>
        <button onClick={()=>{simMatch();setTab("MATCHDAY");}} style={{background:"#fbbf24",color:"#0f172a",border:"none",borderRadius:12,padding:"12px 32px",fontWeight:800,fontSize:14,cursor:"pointer"}}>
          SIMULATE MATCH 🏏
        </button>
      </div>
    </div>
  );

  const renderTeams = () => {
    if (selTeam) {
      const t = selTeam;
      return (
        <div>
          <button onClick={()=>setSelTeam(null)} style={{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:13,padding:0,marginBottom:16}}>← Back to Teams</button>
          <div style={{background:CONF_BG[t.conf],borderRadius:20,padding:"30px 24px",textAlign:"center",marginBottom:20}}>
            <Logo team={t.name} size={80}/>
            <h2 style={{fontSize:24,fontWeight:900,margin:"12px 0 4px"}}>{t.name}</h2>
            <p style={{color:"rgba(255,255,255,0.7)",margin:0,fontSize:13}}>{t.state}</p>
            <p style={{color:"rgba(255,255,255,0.8)",margin:"4px 0 0",fontSize:12}}>🏟️ {t.venue}</p>
            <div style={{display:"flex",gap:16,justifyContent:"center",marginTop:16}}>
              <div style={{background:"rgba(0,0,0,0.3)",borderRadius:10,padding:"8px 16px"}}><div style={{fontSize:20,fontWeight:800}}>{t.rating}</div><div style={{fontSize:9,opacity:0.7}}>POWER</div></div>
              <div style={{background:"rgba(0,0,0,0.3)",borderRadius:10,padding:"8px 16px"}}><div style={{fontSize:20,fontWeight:800}}>{t.indian.length+7}</div><div style={{fontSize:9,opacity:0.7}}>SQUAD</div></div>
              <div style={{background:"rgba(0,0,0,0.3)",borderRadius:10,padding:"8px 16px"}}><div style={{fontSize:14,fontWeight:800}}>⭐ {t.star}</div><div style={{fontSize:9,opacity:0.7}}>MARQUEE</div></div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <div>
              <h3 style={{fontSize:14,fontWeight:700,color:"#f59e0b",marginBottom:8}}>🇮🇳 Indian ({t.indian.length})</h3>
              {t.indian.map((p,i)=>(
                <div key={i} style={{background:"#1e293b",borderRadius:8,padding:"7px 12px",marginBottom:4,fontSize:12,display:"flex",gap:8}}>
                  <span style={{color:"#64748b",fontWeight:700,minWidth:18}}>{i+1}</span><span>{p}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 style={{fontSize:14,fontWeight:700,color:"#3b82f6",marginBottom:8}}>🌍 Overseas (7)</h3>
              {t.overseas.map((p,i)=>(
                <div key={i} style={{background:"#1e293b",borderRadius:8,padding:"7px 12px",marginBottom:4,fontSize:12,display:"flex",gap:8,color:"#93c5fd"}}>
                  <span style={{color:"#64748b",fontWeight:700,minWidth:18}}>{i+1}</span><span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    const divs = {};
    confTeams.forEach(t => { if(!divs[t.div]) divs[t.div]=[]; divs[t.div].push(t); });
    return (
      <div>
        <div style={{display:"flex",gap:8,marginBottom:16,justifyContent:"center",flexWrap:"wrap"}}>
          {["NORTH","EAST","WEST","SOUTH"].map(c=>(
            <button key={c} onClick={()=>{setSelConf(c);setSelTeam(null);}} style={{padding:"10px 18px",borderRadius:10,border:"none",cursor:"pointer",fontWeight:700,fontSize:12,background:selConf===c?CONF_COLORS[c]:"#1e293b",color:selConf===c?"#fff":"#94a3b8",transition:"all 0.2s"}}>
              {c}
            </button>
          ))}
        </div>
        {Object.entries(divs).map(([d,dt])=>(
          <div key={d} style={{marginBottom:20}}>
            <h3 style={{fontSize:15,fontWeight:700,marginBottom:10,paddingBottom:6,borderBottom:`2px solid ${CONF_COLORS[selConf]}40`,color:CONF_COLORS[selConf]}}>{d} Division</h3>
            <div style={{display:"grid",gap:8}}>
              {dt.map((t,i)=>(
                <div key={i} onClick={()=>setSelTeam(t)} style={{background:"#1e293b",borderRadius:14,padding:"12px 16px",display:"flex",alignItems:"center",gap:14,cursor:"pointer",border:"1px solid #334155",transition:"all 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=CONF_COLORS[selConf]}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="#334155"}>
                  <Logo team={t.name} size={48}/>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:14}}>{t.name}</div>
                    <div style={{fontSize:11,color:"#64748b"}}>{t.state}</div>
                    <div style={{fontSize:10,color:"#94a3b8"}}>🏟️ {t.venue}</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:20,fontWeight:900,color:CONF_COLORS[selConf]}}>{t.rating}</div>
                    <div style={{fontSize:10,color:"#94a3b8"}}>⭐ {t.star}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderStandings = () => {
    const confs = ["NORTH","EAST","WEST","SOUTH"];
    return (
      <div>
        <h2 style={{fontSize:20,fontWeight:800,textAlign:"center",marginBottom:16}}>📊 Conference Standings <span style={{fontSize:12,color:"#64748b"}}>(by Power Rating)</span></h2>
        {confs.map(c => {
          const ct = teams.filter(t=>t.conf===c).sort((a,b)=>b.rating-a.rating);
          return (
            <div key={c} style={{marginBottom:20}}>
              <h3 style={{fontSize:14,fontWeight:700,color:CONF_COLORS[c],marginBottom:8,display:"flex",alignItems:"center",gap:8}}>
                <span style={{background:CONF_COLORS[c],color:"#fff",borderRadius:6,padding:"2px 10px",fontSize:11}}>{c}</span>
                {ct.length} Teams
              </h3>
              {ct.map((t,i)=>(
                <div key={i} style={{background:i<4?"rgba(251,191,36,0.08)":"#1e293b",borderRadius:10,padding:"8px 14px",marginBottom:4,display:"flex",alignItems:"center",gap:12,border:i<4?"1px solid rgba(251,191,36,0.2)":"1px solid transparent"}}>
                  <span style={{fontWeight:800,fontSize:13,color:i<4?"#fbbf24":"#64748b",minWidth:24}}>#{i+1}</span>
                  <Logo team={t.name} size={30}/>
                  <span style={{flex:1,fontSize:12,fontWeight:600}}>{t.name}</span>
                  <span style={{fontSize:14,fontWeight:800,color:CONF_COLORS[c]}}>{t.rating}</span>
                  {i<4 && <span style={{fontSize:9,background:"#fbbf2430",color:"#fbbf24",borderRadius:4,padding:"2px 6px"}}>QUALIFIED</span>}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  const renderPlayoffs = () => (
    <div>
      <h2 style={{fontSize:20,fontWeight:800,textAlign:"center",marginBottom:20,color:"#a78bfa"}}>🏆 Playoff Structure</h2>
      <div style={{display:"grid",gap:12}}>
        {PLAYOFF_ROUNDS.map((p,i)=>(
          <div key={i} style={{background:"linear-gradient(135deg,#1e293b,#312e81)",borderRadius:14,padding:"16px 20px",border:"1px solid #4338ca"}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:6}}>
              <span style={{fontSize:24}}>{p.icon}</span>
              <span style={{fontWeight:700,fontSize:16}}>{p.round}</span>
            </div>
            <p style={{color:"#c4b5fd",fontSize:13,margin:0,paddingLeft:44,lineHeight:1.5}}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:20,padding:24,borderRadius:16,textAlign:"center",background:"linear-gradient(135deg,#fbbf24,#f59e0b)",color:"#0f172a"}}>
        <div style={{fontSize:48,marginBottom:8}}>🏏🏆</div>
        <div style={{fontSize:22,fontWeight:900}}>THE IPL SUPER BOWL</div>
        <div style={{fontSize:12,marginTop:8,fontWeight:600}}>Narendra Modi Stadium • Wankhede • Eden Gardens • Chepauk</div>
      </div>
    </div>
  );

  const renderMatchday = () => {
    if(!matchTeams) return (
      <div style={{textAlign:"center",padding:40}}>
        <div style={{fontSize:48,marginBottom:16}}>🏏</div>
        <h2 style={{fontSize:20,fontWeight:800,marginBottom:8}}>Match Simulator</h2>
        <p style={{color:"#94a3b8",marginBottom:20}}>Randomly match two teams and see the result!</p>
        <button onClick={simMatch} style={{background:"#fbbf24",color:"#0f172a",border:"none",borderRadius:12,padding:"14px 36px",fontWeight:800,fontSize:15,cursor:"pointer"}}>SIMULATE 🎲</button>
      </div>
    );
    const [t1,t2] = matchTeams;
    const [s1,s2] = matchScores;
    const winner = s1.runs > s2.runs ? t1 : t2;
    const margin = Math.abs(s1.runs-s2.runs);
    return (
      <div>
        <div style={{background:"linear-gradient(135deg,#1e1b4b,#312e81)",borderRadius:20,padding:30,textAlign:"center",marginBottom:20}}>
          <div style={{fontSize:10,color:"#a5b4fc",fontWeight:700,letterSpacing:2,marginBottom:12}}>NFL-STYLE IPL • MATCH DAY</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:24}}>
            <div style={{textAlign:"center"}}>
              <Logo team={t1.name} size={64}/>
              <div style={{fontSize:13,fontWeight:700,marginTop:8}}>{t1.name}</div>
              <div style={{fontSize:28,fontWeight:900,color:s1.runs>s2.runs?"#fbbf24":"#94a3b8",marginTop:4}}>{s1.runs}/{s1.wkts}</div>
              <div style={{fontSize:11,color:"#94a3b8"}}>({s1.overs} ov)</div>
            </div>
            <div style={{fontSize:24,fontWeight:900,color:"#fbbf24"}}>VS</div>
            <div style={{textAlign:"center"}}>
              <Logo team={t2.name} size={64}/>
              <div style={{fontSize:13,fontWeight:700,marginTop:8}}>{t2.name}</div>
              <div style={{fontSize:28,fontWeight:900,color:s2.runs>s1.runs?"#fbbf24":"#94a3b8",marginTop:4}}>{s2.runs}/{s2.wkts}</div>
              <div style={{fontSize:11,color:"#94a3b8"}}>({s2.overs} ov)</div>
            </div>
          </div>
          <div style={{marginTop:20,background:"rgba(251,191,36,0.15)",borderRadius:12,padding:"12px 20px",display:"inline-block"}}>
            <span style={{fontSize:14,fontWeight:800,color:"#fbbf24"}}>🏆 {winner.name} win by {margin} runs!</span>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {[t1,t2].map((t,idx)=>(
            <div key={idx} style={{background:"#1e293b",borderRadius:14,padding:16}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                <Logo team={t.name} size={32}/>
                <div style={{fontWeight:700,fontSize:13}}>{t.name}</div>
              </div>
              <div style={{fontSize:11,color:"#94a3b8",marginBottom:4}}>⭐ Star: {t.star}</div>
              <div style={{fontSize:11,color:"#64748b"}}>🏟️ {t.venue}</div>
              <div style={{fontSize:11,color:CONF_COLORS[t.conf],marginTop:4}}>PWR: {t.rating}</div>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:20}}>
          <button onClick={simMatch} style={{background:"#fbbf24",color:"#0f172a",border:"none",borderRadius:12,padding:"12px 32px",fontWeight:800,fontSize:14,cursor:"pointer"}}>
            SIMULATE ANOTHER 🎲
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{fontFamily:"'Segoe UI',system-ui,sans-serif",background:"#0f172a",color:"#f1f5f9",minHeight:"100vh"}}>
      {/* Top Nav */}
      <div style={{background:"#020617",borderBottom:"1px solid #1e293b",position:"sticky",top:0,zIndex:50}}>
        <div style={{maxWidth:900,margin:"0 auto",display:"flex",alignItems:"center",padding:"0 16px",height:56}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginRight:"auto"}}>
            <span style={{fontSize:24}}>🏏</span>
            <span style={{fontWeight:900,fontSize:16,background:"linear-gradient(90deg,#fbbf24,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>NFL-IPL</span>
          </div>
          <div style={{display:"flex",gap:2}}>
            {tabs.map(t=>(
              <button key={t} onClick={()=>{setTab(t);if(t!=="TEAMS")setSelTeam(null);}} style={{padding:"8px 14px",borderRadius:8,border:"none",cursor:"pointer",fontWeight:700,fontSize:11,letterSpacing:0.5,background:tab===t?"#fbbf24":"transparent",color:tab===t?"#0f172a":"#94a3b8",transition:"all 0.2s"}}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{maxWidth:900,margin:"0 auto",padding:"20px 16px"}}>
        {tab==="HOME" && renderHome()}
        {tab==="TEAMS" && renderTeams()}
        {tab==="STANDINGS" && renderStandings()}
        {tab==="PLAYOFFS" && renderPlayoffs()}
        {tab==="MATCHDAY" && renderMatchday()}
      </div>

      {/* Footer */}
      <div style={{textAlign:"center",padding:"20px 16px",borderTop:"1px solid #1e293b",marginTop:20}}>
        <p style={{fontSize:11,color:"#475569",margin:0}}>⚠️ Purely fictional fantasy concept • Not affiliated with BCCI, IPL, or any franchise</p>
        <p style={{fontSize:10,color:"#334155",margin:"4px 0 0"}}>Made with ❤️ and way too much cricket obsession</p>
      </div>
    </div>
  );
}