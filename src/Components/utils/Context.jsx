import { createContext, useContext, useEffect, useReducer } from "react";

export const FavContext = createContext();

const lsFav = JSON.parse(localStorage.getItem("fav")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentistas: action.payload };
    case "ADD_FAV":
      return { ...state, fav: [...state.fav, action.payload] };
    case "TOGGLE_THEME":
      return { ...state, darkmode: !state.darkmode };
    default:
      throw new Error("Error al modificar el estado");
  }
};

export const initialState = {
  dentistas: [],
  fav: lsFav,
  darkmode: false,
};

export const Context = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initialState);
 

  useEffect(() => {
    if (state.darkmode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [state.darkmode]);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(state.fav));
  }, [state.fav]);

  const getDentistas = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({ type: "GET_DENTISTS", payload: data });
  };

  useEffect(() => {
    getDentistas();
  }, []);

  return (
    <FavContext.Provider value={{ state, dispatch }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFavContext = () => useContext(FavContext);
