export type FunCategory = "outdoors" | "arts" | "community"

export type FunThing = {
  id: string
  cat: FunCategory
  name: string
  desc: string
  place: string
  /** Venue's own listings page, so tonight's actual lineup is one tap away. */
  link?: string
  /** 0=Sun..6=Sat. Omit for things you can do any day. */
  days?: number[]
  /** Only on the Nth occurrence of its weekday in the month (e.g. First Friday). */
  nthWeekOfMonth?: number
}

export const CATEGORY_LABEL: Record<FunCategory, string> = {
  outdoors: "Outdoors & Nature",
  arts: "Arts & Culture",
  community: "Concerts & Jewish Community",
}

export const FUN_THINGS: FunThing[] = [
  // ---- Outdoors & nature ----
  {
    id: "redwood-stream-trail",
    cat: "outdoors",
    name: "Stream Trail through Redwood Regional",
    desc: "Start at Canyon Meadow and follow the creek up under second-growth redwoods. Flat for the first two miles, deep shade the whole way.",
    place: "Canyon Meadow Staging Area, Redwood Regional Park, Oakland, CA",
    link: "https://www.ebparks.org/parks/redwood",
  },
  {
    id: "sibley-labyrinth",
    cat: "outdoors",
    name: "The stone labyrinth at Sibley",
    desc: "Short walk down into an old volcanic quarry to the hand-laid rock labyrinth, then up to Round Top for the whole bay.",
    place: "Sibley Volcanic Regional Preserve, Oakland, CA",
    link: "https://www.ebparks.org/parks/sibley",
  },
  {
    id: "merritt-necklace",
    cat: "outdoors",
    name: "Necklace of Lights loop at dusk",
    desc: "Time the 3.4-mile Lake Merritt loop so the 126 lamps come on as you round the far side. Bird sanctuary is at the north end.",
    place: "Lake Merritt, Oakland, CA",
    link: "https://www.oaklandca.gov/topics/lake-merritt",
  },
  {
    id: "tilden-steam-train",
    cat: "outdoors",
    name: "Redwood Valley Railway + Botanic Garden",
    desc: "Ride the 15-inch-gauge steam train through the Tilden hills, then walk the Regional Parks Botanic Garden of California natives next door.",
    place: "Redwood Valley Railway, Tilden Regional Park, Berkeley, CA",
    link: "https://www.redwoodvalleyrailway.com/",
  },
  {
    id: "morcom-roses",
    cat: "outdoors",
    name: "Morcom Amphitheater of Roses",
    desc: "Free terraced rose garden tucked off Grand Ave — the Cascade of 1,000 blooms and a reflecting pool. Best in late afternoon light.",
    place: "Morcom Rose Garden, 700 Jean St, Oakland, CA",
    link: "https://www.oaklandca.gov/locations/morcom-rose-garden",
  },
  {
    id: "middle-harbor-cranes",
    cat: "outdoors",
    name: "Sunset behind the Port cranes",
    desc: "Middle Harbor Shoreline Park looks straight down the estuary at the container cranes and the SF skyline. Reliable wind, almost never crowded.",
    place: "Middle Harbor Shoreline Park, Oakland, CA",
    link: "https://www.portofoakland.com/community/middle-harbor-shoreline-park/",
  },
  {
    id: "crab-cove-tidepools",
    cat: "outdoors",
    name: "Low tide at Crab Cove",
    desc: "Calm, shallow bay swimming and tide pools on the Alameda side, with the visitor center's aquarium of local species.",
    place: "Crab Cove Visitor Center, Alameda, CA",
    link: "https://www.ebparks.org/parks/crown-beach",
  },
  {
    id: "briones-peak",
    cat: "outdoors",
    name: "Climb to Briones Peak",
    desc: "Open grassland and cattle gates up to a 1,483-ft summit with Mt. Diablo one way and the bay the other. Feels an hour from anywhere.",
    place: "Briones Regional Park, Lafayette, CA",
    link: "https://www.ebparks.org/parks/briones",
  },
  {
    id: "chavez-kite-bluff",
    cat: "outdoors",
    name: "Fly a kite off the Chavez Park bluff",
    desc: "The landfill hill at the Berkeley Marina catches steady afternoon wind, with the Golden Gate lined up straight ahead.",
    place: "Cesar Chavez Park, Berkeley Marina, Berkeley, CA",
    link: "https://www.cityofberkeley.info/marina/",
  },
  {
    id: "joaquin-miller-woodminster",
    cat: "outdoors",
    name: "Woodminster Cascade steps",
    desc: "Climb the terraced fountain stairs at Joaquin Miller, then pick up the Sunset Trail into the redwoods behind the amphitheater.",
    place: "Woodminster Amphitheater, Joaquin Miller Park, Oakland, CA",
    link: "https://www.oaklandca.gov/locations/joaquin-miller-park",
  },

  // ---- Arts & culture ----
  {
    id: "omca-friday-nights",
    cat: "arts",
    name: "Friday Nights at OMCA",
    desc: "The Oakland Museum stays open late with live music in the garden, food trucks off 10th, and half-price gallery admission.",
    place: "Oakland Museum of California, 1000 Oak St, Oakland, CA",
    link: "https://museumca.org/visit/friday-nights-at-omca/",
    days: [5],
  },
  {
    id: "art-murmur-first-friday",
    cat: "arts",
    name: "First Friday Art Murmur",
    desc: "Uptown galleries open their doors and Telegraph closes to cars — art walk, street vendors, and a lot of live music.",
    place: "Telegraph Ave, Uptown Oakland, CA",
    link: "https://oaklandartmurmur.org/",
    days: [5],
    nthWeekOfMonth: 1,
  },
  {
    id: "chabot-telescope",
    cat: "arts",
    name: "Free telescope viewing at Chabot",
    desc: "Volunteer astronomers open Nellie, the 20-inch refractor, to the public on clear Friday and Saturday nights. Free after hours.",
    place: "Chabot Space & Science Center, 10000 Skyline Blvd, Oakland, CA",
    link: "https://chabotspace.org/",
    days: [5, 6],
  },
  {
    id: "bampfa-repertory",
    cat: "arts",
    name: "Repertory screening at BAMPFA",
    desc: "The Pacific Film Archive runs restorations and director retrospectives most nights — check what's showing, it's rarely anything you can stream.",
    place: "BAMPFA, 2155 Center St, Berkeley, CA",
    link: "https://bampfa.org/calendar",
  },
  {
    id: "paramount-oakland-symphony",
    cat: "arts",
    name: "Oakland Symphony at the Paramount",
    desc: "Worth going for the 1931 Art Deco house alone — the green-and-gold Fountain of Light lobby is a landmark in its own right.",
    place: "Paramount Theatre, 2025 Broadway, Oakland, CA",
    link: "https://oaklandsymphony.org/tickets-events/",
  },
  {
    id: "deyoung-hamon-tower",
    cat: "arts",
    name: "Hamon Tower observation deck",
    desc: "The de Young's ninth-floor deck is free without a museum ticket: 360° over Golden Gate Park to the ocean and downtown.",
    place: "de Young Museum, Golden Gate Park, San Francisco, CA",
    link: "https://www.famsf.org/visit/de-young",
  },
  {
    id: "sfmoma-photography",
    cat: "arts",
    name: "SFMOMA's photography floors",
    desc: "The Pritzker Center is the largest photography space of any US museum — plus the free ground-floor Richard Serra gallery.",
    place: "SFMOMA, 151 3rd St, San Francisco, CA",
    link: "https://www.sfmoma.org/exhibitions/",
  },
  {
    id: "ybca",
    cat: "arts",
    name: "Yerba Buena Center for the Arts",
    desc: "Contemporary shows and performance built around Bay Area artists, in the block of gardens behind Moscone.",
    place: "Yerba Buena Center for the Arts, 701 Mission St, San Francisco, CA",
    link: "https://ybca.org/whats-on/",
  },
  {
    id: "pro-arts",
    cat: "arts",
    name: "Pro Arts Gallery",
    desc: "Long-running nonprofit downtown showing East Bay artists — small enough to see properly in half an hour.",
    place: "Pro Arts Gallery, Oakland, CA",
    link: "https://www.proartsgallery.org/",
  },
  {
    id: "rock-paper-scissors",
    cat: "arts",
    name: "Rock Paper Scissors Collective",
    desc: "Artist-run space in Uptown with a zine library, print shows, and drop-in craft nights.",
    place: "Rock Paper Scissors Collective, Oakland, CA",
    link: "https://www.rpscollective.org/",
  },

  // ---- Concerts & Jewish community ----
  {
    id: "fox-tonight",
    cat: "community",
    name: "Tonight's marquee at the Fox",
    desc: "The 1928 Fox Oakland is the best mid-size room in the East Bay — see who's playing under those two cast-plaster deities.",
    place: "Fox Theater, 1807 Telegraph Ave, Oakland, CA",
    link: "https://thefoxoakland.com/listing/",
  },
  {
    id: "yoshis-set",
    cat: "community",
    name: "Late set at Yoshi's",
    desc: "Jack London Square jazz club with two sets most nights. The second set is usually looser and easier to get into.",
    place: "Yoshi's, 510 Embarcadero West, Oakland, CA",
    link: "https://yoshis.com/calendar/",
  },
  {
    id: "freight-salvage",
    cat: "community",
    name: "Freight & Salvage",
    desc: "Berkeley's nonprofit folk and roots room — 400 seats, no bar noise, and the audience actually listens.",
    place: "Freight & Salvage, 2020 Addison St, Berkeley, CA",
    link: "https://thefreight.org/shows/",
  },
  {
    id: "new-parish",
    cat: "community",
    name: "The New Parish",
    desc: "Uptown room for hip-hop, Afrobeat, and reggae, with a heated patio and a stage you can actually get near.",
    place: "The New Parish, 1743 San Pablo Ave, Oakland, CA",
    link: "https://thenewparish.com/",
  },
  {
    id: "greek-theatre",
    cat: "community",
    name: "Show under the stars at the Greek",
    desc: "UC Berkeley's 1903 amphitheater, built into the hillside — the upper rows look out over the whole bay at sunset.",
    place: "Hearst Greek Theatre, Berkeley, CA",
    link: "https://thegreekberkeley.com/events/",
  },
  {
    id: "sfjazz",
    cat: "community",
    name: "SFJAZZ Center",
    desc: "Purpose-built for listening — the Miner Auditorium wraps the stage so no seat is more than a few rows back.",
    place: "SFJAZZ Center, 201 Franklin St, San Francisco, CA",
    link: "https://www.sfjazz.org/tickets/",
  },
  {
    id: "urban-adamah-shabbat",
    cat: "community",
    name: "Shabbat on the farm at Urban Adamah",
    desc: "Friday evening Kabbalat Shabbat outdoors on the Berkeley farm, with singing and a communal vegetarian dinner. Open to everyone.",
    place: "Urban Adamah, 1151 Sixth St, Berkeley, CA",
    link: "https://urbanadamah.org/events/",
    days: [5],
  },
  {
    id: "kehilla-shabbat",
    cat: "community",
    name: "Friday night at Kehilla",
    desc: "Kabbalat Shabbat at your Piedmont Ave congregation — music-forward, progressive, and welcoming to drop-ins.",
    place: "Kehilla Community Synagogue, 1300 Grand Ave, Piedmont, CA",
    link: "https://kehillasynagogue.org/calendar/",
    days: [5],
  },
  {
    id: "chochmat-shabbat",
    cat: "community",
    name: "Chochmat HaLev Shabbat",
    desc: "Ecstatic, chant-and-movement Kabbalat Shabbat in Berkeley — very different in feel from a standard Friday service.",
    place: "Chochmat HaLev, 2215 Prince St, Berkeley, CA",
    link: "https://chochmat.org/events/",
    days: [5],
  },
  {
    id: "cjm",
    cat: "community",
    name: "Contemporary Jewish Museum",
    desc: "Libeskind's blue-steel addition grafted onto a 1907 power substation, with rotating exhibits and public programs.",
    place: "Contemporary Jewish Museum, 736 Mission St, San Francisco, CA",
    link: "https://www.thecjm.org/exhibitions",
  },
  {
    id: "jcc-east-bay",
    cat: "community",
    name: "JCC East Bay programs",
    desc: "Talks, classes, and holiday events in Berkeley that are open to the community rather than members only.",
    place: "JCC East Bay, 1414 Walnut St, Berkeley, CA",
    link: "https://www.jcceastbay.org/events/",
  },
  {
    id: "svara",
    cat: "community",
    name: "SVARA night seder",
    desc: "Queer-normative, tradition-radical Talmud study — loud, chevruta-based, and no Hebrew required to start.",
    place: "SVARA (online and Bay Area gatherings)",
    link: "https://svara.org/",
  },
]

export const CATEGORY_ORDER: FunCategory[] = ["outdoors", "arts", "community"]

function nthWeekdayOfMonth(date: Date): number {
  return Math.floor((date.getDate() - 1) / 7) + 1
}

/** Things that actually happen on the given day. */
export function availableOn(date: Date, cat: FunCategory): FunThing[] {
  const dow = date.getDay()
  const nth = nthWeekdayOfMonth(date)
  const matches = FUN_THINGS.filter((t) => {
    if (t.cat !== cat) return false
    if (t.days && !t.days.includes(dow)) return false
    if (t.nthWeekOfMonth && t.nthWeekOfMonth !== nth) return false
    return true
  })
  // Never return an empty category, even on an odd calendar day.
  return matches.length > 0 ? matches : FUN_THINGS.filter((t) => t.cat === cat && !t.days)
}

export function dateKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

function hashStr(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i)
    h |= 0
  }
  return h
}

export function mulberry32(seed: number): () => number {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** One pick per category. Same picks all day unless shuffled. */
export function pickForDate(date: Date, rng?: () => number): FunThing[] {
  const random = rng ?? mulberry32(hashStr(dateKey(date)))
  return CATEGORY_ORDER.map((cat) => {
    const opts = availableOn(date, cat)
    return opts[Math.floor(random() * opts.length)]
  })
}
