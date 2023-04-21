import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(['tag1', 'tag2', 'tag3']);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const results = suggestions.filter((tag) =>
      tag.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : suggestions.filter(
          (tag) => tag.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  return (
    <InputGroup>
      <Autosuggest
        inputProps={{
          placeholder: 'Tìm kiếm',
          value: query,
          onChange: handleInputChange,
        }}
        suggestions={getSuggestions(query)}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) =>
          setSuggestions(getSuggestions(value))
        }
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        highlightFirstSuggestion
      />
      <Button onClick={handleSearch}>Tìm kiếm</Button>
      {searchResults.length > 0 && (
        <div>
          <h2>Kết quả tìm kiếm:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </InputGroup>
  );
}

export default SearchBar;
