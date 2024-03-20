import { useSearchContext } from "../context/SearchContext";
import "../scss/Search.scss";

const Search = () => {
  const { setText } = useSearchContext();

  return (
    <>
      <input type="search" name="search" id="search" placeholder="Blend or Mocha?" onChange={e=>setText(e.target.value)}/>
    </>
  );
};

export default Search;
