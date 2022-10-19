import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// exporting two things
// first export is for setting reducer and its path in store to available data in store.
// second export is for calling those services from pages.

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongByGenre: builder.query({ query: (genre) =>  `/charts/genre-world?genre_code=${genre}`}),
    getSongDetails: builder.query({ query: (songid) => `/tracks/details?track_id=${songid}`}),
    getSongRelated: builder.query({ query: (songid) => `/tracks/related?track_id=${songid}`}),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
    getSongsByCountry: builder.query({ query: (countryCode) => `charts/country?country_code=${countryCode}`}),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
  })
}); 

export const {
  useGetTopChartsQuery,
  useGetSongByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery
} = shazamCoreApi;