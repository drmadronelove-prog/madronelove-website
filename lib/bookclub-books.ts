export type Book = {
  rank: number
  title: string
  author: string
  year: number
  genre: string
}

// NYT, "The 100 Best Books of the 21st Century" (2024 poll of 503 novelists,
// critics, and other literary figures). Ranks are exact from the source list.
export const books: Book[] = [
  { rank: 1, title: "My Brilliant Friend", author: "Elena Ferrante", year: 2012, genre: "Fiction" },
  { rank: 2, title: "The Warmth of Other Suns", author: "Isabel Wilkerson", year: 2010, genre: "Nonfiction" },
  { rank: 3, title: "Wolf Hall", author: "Hilary Mantel", year: 2009, genre: "Historical Fiction" },
  { rank: 4, title: "The Known World", author: "Edward P. Jones", year: 2003, genre: "Fiction" },
  { rank: 5, title: "The Corrections", author: "Jonathan Franzen", year: 2001, genre: "Fiction" },
  { rank: 6, title: "2666", author: "Roberto Bolaño", year: 2008, genre: "Fiction" },
  { rank: 7, title: "The Underground Railroad", author: "Colson Whitehead", year: 2016, genre: "Fiction" },
  { rank: 8, title: "Austerlitz", author: "W.G. Sebald", year: 2001, genre: "Fiction" },
  { rank: 9, title: "Never Let Me Go", author: "Kazuo Ishiguro", year: 2005, genre: "Fiction" },
  { rank: 10, title: "Gilead", author: "Marilynne Robinson", year: 2004, genre: "Fiction" },
  { rank: 11, title: "The Brief Wondrous Life of Oscar Wao", author: "Junot Díaz", year: 2007, genre: "Fiction" },
  { rank: 12, title: "The Year of Magical Thinking", author: "Joan Didion", year: 2005, genre: "Memoir" },
  { rank: 13, title: "The Road", author: "Cormac McCarthy", year: 2006, genre: "Fiction" },
  { rank: 14, title: "Outline", author: "Rachel Cusk", year: 2015, genre: "Fiction" },
  { rank: 15, title: "Pachinko", author: "Min Jin Lee", year: 2017, genre: "Fiction" },
  { rank: 16, title: "The Amazing Adventures of Kavalier & Clay", author: "Michael Chabon", year: 2000, genre: "Fiction" },
  { rank: 17, title: "The Sellout", author: "Paul Beatty", year: 2015, genre: "Fiction" },
  { rank: 18, title: "Lincoln in the Bardo", author: "George Saunders", year: 2017, genre: "Fiction" },
  { rank: 19, title: "Say Nothing", author: "Patrick Radden Keefe", year: 2019, genre: "Nonfiction" },
  { rank: 20, title: "Erasure", author: "Percival Everett", year: 2001, genre: "Fiction" },
  { rank: 21, title: "Evicted", author: "Matthew Desmond", year: 2016, genre: "Nonfiction" },
  { rank: 22, title: "Behind the Beautiful Forevers", author: "Katherine Boo", year: 2012, genre: "Nonfiction" },
  { rank: 23, title: "Hateship, Friendship, Courtship, Loveship, Marriage", author: "Alice Munro", year: 2001, genre: "Short Stories" },
  { rank: 24, title: "The Overstory", author: "Richard Powers", year: 2018, genre: "Fiction" },
  { rank: 25, title: "Random Family", author: "Adrian Nicole LeBlanc", year: 2003, genre: "Nonfiction" },
  { rank: 26, title: "Atonement", author: "Ian McEwan", year: 2002, genre: "Fiction" },
  { rank: 27, title: "Americanah", author: "Chimamanda Ngozi Adichie", year: 2013, genre: "Fiction" },
  { rank: 28, title: "Cloud Atlas", author: "David Mitchell", year: 2004, genre: "Fiction" },
  { rank: 29, title: "The Last Samurai", author: "Helen DeWitt", year: 2000, genre: "Fiction" },
  { rank: 30, title: "Sing, Unburied, Sing", author: "Jesmyn Ward", year: 2017, genre: "Fiction" },
  { rank: 31, title: "White Teeth", author: "Zadie Smith", year: 2000, genre: "Fiction" },
  { rank: 32, title: "The Line of Beauty", author: "Alan Hollinghurst", year: 2004, genre: "Fiction" },
  { rank: 33, title: "Salvage the Bones", author: "Jesmyn Ward", year: 2011, genre: "Fiction" },
  { rank: 34, title: "Citizen", author: "Claudia Rankine", year: 2014, genre: "Poetry" },
  { rank: 35, title: "Fun Home", author: "Alison Bechdel", year: 2006, genre: "Graphic Memoir" },
  { rank: 36, title: "Between the World and Me", author: "Ta-Nehisi Coates", year: 2015, genre: "Nonfiction" },
  { rank: 37, title: "The Years", author: "Annie Ernaux", year: 2018, genre: "Memoir" },
  { rank: 38, title: "The Savage Detectives", author: "Roberto Bolaño", year: 2007, genre: "Fiction" },
  { rank: 39, title: "A Visit From the Goon Squad", author: "Jennifer Egan", year: 2010, genre: "Fiction" },
  { rank: 40, title: "H Is for Hawk", author: "Helen Macdonald", year: 2015, genre: "Memoir" },
  { rank: 41, title: "Small Things Like These", author: "Claire Keegan", year: 2021, genre: "Fiction" },
  { rank: 42, title: "A Brief History of Seven Killings", author: "Marlon James", year: 2014, genre: "Fiction" },
  { rank: 43, title: "Postwar", author: "Tony Judt", year: 2005, genre: "Nonfiction" },
  { rank: 44, title: "The Fifth Season", author: "N.K. Jemisin", year: 2015, genre: "Fantasy" },
  { rank: 45, title: "The Argonauts", author: "Maggie Nelson", year: 2015, genre: "Memoir" },
  { rank: 46, title: "The Goldfinch", author: "Donna Tartt", year: 2013, genre: "Fiction" },
  { rank: 47, title: "A Mercy", author: "Toni Morrison", year: 2008, genre: "Fiction" },
  { rank: 48, title: "Persepolis", author: "Marjane Satrapi", year: 2003, genre: "Graphic Memoir" },
  { rank: 49, title: "The Vegetarian", author: "Han Kang", year: 2016, genre: "Fiction" },
  { rank: 50, title: "Trust", author: "Hernan Diaz", year: 2022, genre: "Fiction" },
]

export function sfplSearchUrl(book: Book): string {
  const q = encodeURIComponent(`${book.title} ${book.author}`)
  return `https://sfpl.bibliocommons.com/v2/search?query=${q}&searchType=smart`
}

export function oaklandSearchUrl(book: Book): string {
  const q = encodeURIComponent(`${book.title} ${book.author}`)
  return `https://oaklandlibrary.bibliocommons.com/v2/search?query=${q}&searchType=smart`
}
