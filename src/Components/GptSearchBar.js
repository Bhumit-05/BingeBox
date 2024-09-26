import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, GROQ_API_KEY } from '../utils/Constants';
import Groq from "groq-sdk";
import {addGptMoviesResult} from "../utils/GptSlice";

const GptSearchBar = () => {

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const searchMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

    const json = await data.json();
    return json.results;
  }

  const groq = new Groq({ 
    apiKey: GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const getGroqChatCompletion = async () => {
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query"+ searchText.current.value + ". Only return me name of 7 movies, none of them should repeat, no other text, comma separated like the example result given ahead. Example Result: Interstellar, Seven, Shawshank Redemption, Matrix, Inception";
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "llama3-8b-8192",
    });
  }

  const handleGptSearchClick = async () => {

    const searchResults = await getGroqChatCompletion();

    const gptMovieList = searchResults.choices?.[0]?.message?.content.split(",");
    
    const promiseArray = gptMovieList.map(movie=> searchMovies(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMoviesResult(tmdbResults));

  }

  return (
    <div className='m-[200px] px-[100px] pt-[200px] md:p-[100px]   '>
      <form className='bg-black/60 ml-[150px] md:w-auto mt-[50px] w-[385px] inline-block rounded-xl pr-[15px]'
      onSubmit={(e) => e.preventDefault()}>
        <input 
          ref={searchText}
          type="text" 
          className='p-[16px] m-[16px] md:w-[840px] w-[235px] text-lg py-[10px]'
          placeholder="What would you like to watch today?"/>
        <button 
          className='py-[12px] px-4 bg-purple-500 text-white text-lg rounded-lg inline-block mr-auto ml-auto max-w-fit'
          onClick={handleGptSearchClick}>
          🔍Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;