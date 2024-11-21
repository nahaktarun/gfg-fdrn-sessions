// UseEffect Hook:
// side effects of the components
// any change in component state or any change with the parent component or any change during initial render can leads to side effect.
// it causes the rerender of the component.

// side effects includes:
// 1. fetch the data from api
// 2. DOM manipulation
// 3. logging

// import {useEffect} from 'react'
// Syntax:
// 1. Initial render
//  useEffect(() => {
//    Effect
// }, return () => {} // cleanup function
// , [])
// 2. with change of state
// useEffect(() => {
//     //    Effect
//     // }, return () => {} // cleanup function
//     // , [state, state1])
// 3. any change in the page may cause the effect.
// useEffect(() => {
//            Effect
//         }, return () => {} // cleanup function
//         ,)
// useEffect(() => {
//     return () => {
//       setFilterQuery('');
//     };
//   }, []);

import { useEffect, useState } from "react";

// 3. Custom Hook:
// a. build on top of  existing hook.
// b. use (prefix to the custom hook)

function useGithubAPI(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return {};
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        // if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username]);

  return [user, loading, error];
}

function DemoUseEffect() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=b8b1f2f08d0135019ddbc77731aafbc5&units=metric"
        );
        const data = await result.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
    return () => {
      console.log(1000);
      setWeather(null);
    };
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <p>Loading please wait</p>
        ) : weather ? (
          <div>
            <p>Temperature: {weather.main.temp} </p>
            <p>Current State of Weather: {weather.weather[0].description} </p>
          </div>
        ) : (
          <p>Failed to load</p>
        )}
      </div>
    </div>
  );
}

function DemoUseEffect() {
  const [username, setUsername] = useState("python");
  const [username2, setUsername2] = useState("java");

  const [user, loading, error] = useGithubAPI(username);
  const [user2, loading2, error2] = useGithubAPI(username2);

  return (
    <div>
      {user && (
        <div>
          {user.login} {user2.login}
        </div>
      )}
    </div>
  );
}

export default DemoUseEffect;
