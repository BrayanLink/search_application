import {useState} from 'react';
import logo from '../assets/images/Logo_ML.png';
import magnifierIcon from '../assets/images/ic_Search.png';
import {PLACEHOLDER_INPUT_SEARCH} from '../tokens/tokensApp';
import {Link, useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const [querySearchValue, setquerySearchValue] = useState('');

  const setSearchProduct = (querySearchValue: string) => {
    navigate(`/items?search=${querySearchValue}`);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchProduct(querySearchValue.trim());
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      setSearchProduct(querySearchValue.trim());
    }
  };

  return (
    <header>
      <nav>
        <div className="nav_container">
          <div className="nav_logo">
            <Link to={`/`}>
              <img
                src={logo}
                alt="Mercado Libre - Donde comprar y vender de todo"
              />
            </Link>
          </div>
          <div className="search">
            <form>
              <input
                id="search-form"
                name="search-form"
                type="search"
                placeholder={PLACEHOLDER_INPUT_SEARCH}
                aria-label="Search"
                value={querySearchValue}
                onChange={event => setquerySearchValue(event.target.value)}
                onKeyDown={event => {
                  onKeyDownHandler(event);
                }}
              />
              <button
                type="submit"
                onClick={event => {
                  onClickHandler(event);
                }}
              >
                <img src={magnifierIcon} alt="magnifying glass" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SearchBar;
