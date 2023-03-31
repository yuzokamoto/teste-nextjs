import { useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../constants/url";
import { GlobalStyle } from '../styles/GlobalStyle.styled';

export default function App({ Component, pageProps }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (token) {
      fetchPlaylists();
    }
  }, []);

  const fetchPlaylists = async () => {
    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const response = await axios.get(BASE_URL + "/playlists", config);

      setPlaylists(response.data);
    } catch (error) {
      console.error(error?.response?.data);
      console.log("Se o erro for 'token inválido', delete o token manualmente!")
    }
  };

  const context = {
    playlists,
    fetchPlaylists
  };

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}