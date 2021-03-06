import React, { useEffect } from "react";
import "./SearchInput.css";
import { searchMovieTVShow } from "../../context/movie";
import { MovieTVShowsContext } from "../../context/context";
import { debounce } from "debounce";

type searchProps = {
  type: string;
};

const SearchInput = ({ type }: searchProps) => {
  const { searchMoviesTVShows } = React.useContext(MovieTVShowsContext);
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = debounce((e: any) => {
    if (e.length < 3) return;
    searchMovieTVShow(type, e).then((movie) => {
      searchMoviesTVShows(movie);
    });
  }, 1000);

  useEffect(() => {
    if (search) {
      handleSearch(search);
    }
  }, [search]);
  return (
    <div className="search_wapper">
      <div className="search_icon">
        <svg
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.38354 0.214294C9.25164 0.214294 11.0432 0.821978 12.3642 1.90366C13.6851 2.98534 14.4272 4.45242 14.4272 5.98215C14.4272 7.24622 13.9305 8.41497 13.0889 9.36576L17.809 13.2308C18.013 13.3955 18.1316 13.6183 18.14 13.8529C18.1484 14.0874 18.0459 14.3155 17.854 14.4897C17.662 14.6639 17.3954 14.7706 17.1096 14.7878C16.8239 14.8049 16.5411 14.7311 16.3201 14.5817L16.2356 14.5192L11.5156 10.6541C10.3146 11.3683 8.86781 11.752 7.38354 11.75C5.51544 11.75 3.72384 11.1423 2.40289 10.0606C1.08195 8.97896 0.339844 7.51188 0.339844 5.98215C0.339844 4.45242 1.08195 2.98534 2.40289 1.90366C3.72384 0.821978 5.51544 0.214294 7.38354 0.214294ZM7.38354 2.03572C6.10536 2.03572 4.87954 2.45151 3.97573 3.19161C3.07192 3.9317 2.56417 4.93549 2.56417 5.98215C2.56417 7.02881 3.07192 8.0326 3.97573 8.7727C4.87954 9.5128 6.10536 9.92858 7.38354 9.92858C8.66172 9.92858 9.88754 9.5128 10.7913 8.7727C11.6952 8.0326 12.2029 7.02881 12.2029 5.98215C12.2029 4.93549 11.6952 3.9317 10.7913 3.19161C9.88754 2.45151 8.66172 2.03572 7.38354 2.03572Z"
            fill="#333333"
          />
        </svg>
      </div>
      <form className="search_input" noValidate>
        <input
          className="search_input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
