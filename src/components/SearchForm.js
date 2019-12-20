import React, { useState } from "react";

function SearchForm(props) {
  const [result, setResult] = useState();
  const handleChanges = event => {
    setResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const filter = props.character.filter(character => {
      return character.name.indexOf(result);
    });
    props.searching(filter);
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          placeholder="search"
          id="character"
        />
      </form>
    </section>
  );
}

export default SearchForm;
