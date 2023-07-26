import React from "react"
import Favourites from "./components/Favourites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"
import Search from "./components/Search"
import { useGlobalContext } from "./Context"

function App() {
  const {showModal, favourites} = useGlobalContext()
  const len = favourites.length
  return (
    <main>
      <Search />
      {len > 0 && <Favourites />}
        <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
