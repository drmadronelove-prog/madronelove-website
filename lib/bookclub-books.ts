export type Book = {
  rank: number
  title: string
  author: string
  /** The source lists carry only rank, title, and author; both are optional. */
  year?: number
  genre?: string
}

export type BookList = {
  /** Stable key for saved checkmarks. Never reuse or rename. */
  id: string
  title: string
  blurb: string
  sourceLabel: string
  sourceUrl: string
  books: Book[]
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
  { rank: 51, title: "Life After Life", author: "Kate Atkinson" },
  { rank: 52, title: "Train Dreams", author: "Denis Johnson" },
  { rank: 53, title: "Runaway", author: "Alice Munro" },
  { rank: 54, title: "Tenth of December", author: "George Saunders" },
  { rank: 55, title: "The Looming Tower", author: "Lawrence Wright" },
  { rank: 56, title: "The Flamethrowers", author: "Rachel Kushner" },
  { rank: 57, title: "Nickel and Dimed", author: "Barbara Ehrenreich" },
  { rank: 58, title: "Stay True", author: "Hua Hsu" },
  { rank: 59, title: "Middlesex", author: "Jeffrey Eugenides" },
  { rank: 60, title: "Heavy", author: "Kiese Laymon" },
  { rank: 61, title: "Demon Copperhead", author: "Barbara Kingsolver" },
  { rank: 62, title: "10:04", author: "Ben Lerner" },
  { rank: 63, title: "Veronica", author: "Mary Gaitskill" },
  { rank: 64, title: "The Great Believers", author: "Rebecca Makkai" },
  { rank: 65, title: "The Plot Against America", author: "Philip Roth" },
  { rank: 66, title: "We the Animals", author: "Justin Torres" },
  { rank: 67, title: "Far From the Tree", author: "Andrew Solomon" },
  { rank: 68, title: "The Friend", author: "Sigrid Nunez" },
  { rank: 69, title: "The New Jim Crow", author: "Michelle Alexander" },
  { rank: 70, title: "All Aunt Hagar's Children", author: "Edward P. Jones" },
  { rank: 71, title: "The Copenhagen Trilogy", author: "Tove Ditlevsen" },
  { rank: 72, title: "Secondhand Time", author: "Svetlana Alexievich" },
  { rank: 73, title: "The Passage of Power", author: "Robert A. Caro" },
  { rank: 74, title: "Olive Kitteridge", author: "Elizabeth Strout" },
  { rank: 75, title: "Exit West", author: "Mohsin Hamid" },
  { rank: 76, title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin" },
  { rank: 77, title: "An American Marriage", author: "Tayari Jones" },
  { rank: 78, title: "Septology", author: "Jon Fosse" },
  { rank: 79, title: "A Manual for Cleaning Women", author: "Lucia Berlin" },
  { rank: 80, title: "The Story of the Lost Child", author: "Elena Ferrante" },
  { rank: 81, title: "Pulphead", author: "John Jeremiah Sullivan" },
  { rank: 82, title: "Hurricane Season", author: "Fernanda Melchor" },
  { rank: 83, title: "When We Cease to Understand the World", author: "Benjamín Labatut" },
  { rank: 84, title: "The Emperor of All Maladies", author: "Siddhartha Mukherjee" },
  { rank: 85, title: "Pastoralia", author: "George Saunders" },
  { rank: 86, title: "Frederick Douglass", author: "David W. Blight" },
  { rank: 87, title: "Detransition, Baby", author: "Torrey Peters" },
  { rank: 88, title: "The Collected Stories of Lydia Davis", author: "Lydia Davis" },
  { rank: 89, title: "The Return", author: "Hisham Matar" },
  { rank: 90, title: "The Sympathizer", author: "Viet Thanh Nguyen" },
  { rank: 91, title: "The Human Stain", author: "Philip Roth" },
  { rank: 92, title: "The Days of Abandonment", author: "Elena Ferrante" },
  { rank: 93, title: "Station Eleven", author: "Emily St. John Mandel" },
  { rank: 94, title: "On Beauty", author: "Zadie Smith" },
  { rank: 95, title: "Bring Up the Bodies", author: "Hilary Mantel" },
  { rank: 96, title: "Wayward Lives, Beautiful Experiments", author: "Saidiya Hartman" },
  { rank: 97, title: "Men We Reaped", author: "Jesmyn Ward" },
  { rank: 98, title: "Bel Canto", author: "Ann Patchett" },
  { rank: 99, title: "How to Be Both", author: "Ali Smith" },
  { rank: 100, title: "Tree of Smoke", author: "Denis Johnson" },
]

export const thrillers: Book[] = [
  { rank: 1, title: "Gone Girl", author: "Gillian Flynn" },
  { rank: 2, title: "Mystic River", author: "Dennis Lehane" },
  { rank: 3, title: "In the Woods", author: "Tana French" },
  { rank: 4, title: "The Girl With the Dragon Tattoo", author: "Stieg Larsson" },
  { rank: 5, title: "No Country for Old Men", author: "Cormac McCarthy" },
  { rank: 6, title: "My Sister, the Serial Killer", author: "Oyinkan Braithwaite" },
  { rank: 7, title: "The God of the Woods", author: "Liz Moore" },
  { rank: 8, title: "Razorblade Tears", author: "S.A. Cosby" },
  { rank: 9, title: "Slow Horses", author: "Mick Herron" },
  { rank: 10, title: "Bluebird, Bluebird", author: "Attica Locke" },
  { rank: 11, title: "Blacktop Wasteland", author: "S.A. Cosby" },
  { rank: 12, title: "The Girl on the Train", author: "Paula Hawkins" },
  { rank: 13, title: "Case Histories", author: "Kate Atkinson" },
  { rank: 14, title: "We Need to Talk About Kevin", author: "Lionel Shriver" },
  { rank: 15, title: "Dare Me", author: "Megan Abbott" },
  { rank: 16, title: "The Lincoln Lawyer", author: "Michael Connelly" },
  { rank: 17, title: "Shutter Island", author: "Dennis Lehane" },
  { rank: 18, title: "11/22/63", author: "Stephen King" },
  { rank: 19, title: "Sharp Objects", author: "Gillian Flynn" },
  { rank: 20, title: "Broken Harbor", author: "Tana French" },
  { rank: 21, title: "Room", author: "Emma Donoghue" },
  { rank: 22, title: "The Constant Gardener", author: "John le Carré" },
  { rank: 23, title: "The Goldfinch", author: "Donna Tartt" },
  { rank: 24, title: "The Dry", author: "Jane Harper" },
  { rank: 25, title: "Winter's Bone", author: "Daniel Woodrell" },
  { rank: 26, title: "The Da Vinci Code", author: "Dan Brown" },
  { rank: 27, title: "Big Little Lies", author: "Liane Moriarty" },
  { rank: 28, title: "The Perfect Nanny", author: "Leila Slimani" },
  { rank: 29, title: "The Plot", author: "Jean Hanff Korelitz" },
  { rank: 30, title: "The Sympathizer", author: "Viet Thanh Nguyen" },
  { rank: 31, title: "Defending Jacob", author: "William Landay" },
  { rank: 32, title: "Notes on an Execution", author: "Danya Kukafka" },
  { rank: 33, title: "The Witch Elm", author: "Tana French" },
  { rank: 34, title: "The Likeness", author: "Tana French" },
  { rank: 35, title: "All the Sinners Bleed", author: "S.A. Cosby" },
  { rank: 36, title: "The Silent Patient", author: "Alex Michaelides" },
  { rank: 37, title: "Your House Will Pay", author: "Steph Cha" },
  { rank: 38, title: "I Am Pilgrim", author: "Terry Hayes" },
  { rank: 39, title: "Fingersmith", author: "Sarah Waters" },
  { rank: 40, title: "Dark Matter", author: "Blake Crouch" },
  { rank: 41, title: "Tell No One", author: "Harlan Coben" },
  { rank: 42, title: "You", author: "Caroline Kepnes" },
  { rank: 43, title: "Lush Life", author: "Richard Price" },
  { rank: 44, title: "Jar of Hearts", author: "Jennifer Hillier" },
  { rank: 45, title: "Mexican Gothic", author: "Silvia Moreno-Garcia" },
  { rank: 46, title: "Before I Go to Sleep", author: "S.J. Watson" },
  { rank: 47, title: "The Push", author: "Ashley Audrain" },
  { rank: 48, title: "All the Colors of the Dark", author: "Chris Whitaker" },
  { rank: 49, title: "Magpie Murders", author: "Anthony Horowitz" },
  { rank: 50, title: "None of This Is True", author: "Lisa Jewell" },
]

export const BOOK_LISTS: BookList[] = [
  {
    id: "nyt-100-best",
    title: "The 100 Best Books of the 21st Century",
    blurb:
      "As ranked in the New York Times’ 2024 poll of 503 novelists, critics, and other literary figures. Tap a title to mark it read.",
    sourceLabel: "The 100 Best Books of the 21st Century, The New York Times (2024)",
    sourceUrl: "https://www.nytimes.com/interactive/2024/books/best-books-21st-century.html",
    books,
  },
  {
    id: "nyt-best-thrillers",
    title: "The 50 Best Thrillers of the 21st Century",
    blurb: "The New York Times Book Review’s ranked list of the best thrillers of the century so far. Tap a title to mark it read.",
    sourceLabel: "The 50 Best Thrillers of the 21st Century, The New York Times",
    sourceUrl: "https://www.nytimes.com/50thrillers",
    books: thrillers,
  },
]

export function sfplSearchUrl(book: Book): string {
  const q = encodeURIComponent(`${book.title} ${book.author}`)
  return `https://sfpl.bibliocommons.com/v2/search?query=${q}&searchType=smart`
}

export function oaklandSearchUrl(book: Book): string {
  const q = encodeURIComponent(`${book.title} ${book.author}`)
  return `https://oaklandlibrary.bibliocommons.com/v2/search?query=${q}&searchType=smart`
}
