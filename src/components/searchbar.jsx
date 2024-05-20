import appwriteService from "../appwrite/services/configuration";
import Input from "./input";
import { useState, useEffect } from "react";
import Userprofile from "./userprofile";
import { Query } from 'appwrite'; 

function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  function handleInput(event) {
    setInputValue(event.target.value.toLowerCase());
  }

  useEffect(() => {
    if (inputValue) {
      const fetchSuggestions = async () => {
        try {
          const response = await appwriteService.getallusers([
            Query.search('name', inputValue.replace(" ","-"))
          ]);

          console.log(response.documents)
          setSuggestions(response.documents);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <Input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          type="search"
          value={inputValue}
          onChange={handleInput}
        />
      </div>

      {suggestions.length > 0 && (
        <div className="w-full bg-white shadow-md rounded-md mt-2">
          {suggestions.map((suggestion) => (
            <div key={suggestion.$id} className="p-2 border-b border-gray-200 flex justify-center ">
              <Userprofile name={suggestion.$id} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Searchbar;
