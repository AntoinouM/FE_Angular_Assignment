// adult: false
// backdrop_path: "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg"
// first_air_date: "2008-01-20"
// genre_ids: (2) [18, 80]
// id: 1396
// name: "Breaking Bad"
// origin_country: ['US']
// original_language: "en"
// original_name: "Breaking Bad"
// overview: "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime."
// popularity: 529.009
// poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
// vote_average: 8.915
// vote_count: 14425

export interface TvShow {
    adult: boolean,
    backdrop_path: string,
    first_air_date: "2008-01-20"
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
}