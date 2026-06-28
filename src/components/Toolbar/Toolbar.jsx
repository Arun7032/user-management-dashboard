import "./Toolbar.css";

import SearchBar from "../SearchBar/SearchBar";

function Toolbar({
  searchTerm,
  setSearchTerm,

  sortOption,
  setSortOption,

  onFilterClick,

  onAddUserClick,
}) {
  return (
    <div className="toolbar">

      <div className="toolbar-search">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort By</option>

        <option value="firstNameAsc">
          First Name (A-Z)
        </option>

        <option value="firstNameDesc">
          First Name (Z-A)
        </option>

        <option value="lastNameAsc">
          Last Name (A-Z)
        </option>

        <option value="lastNameDesc">
          Last Name (Z-A)
        </option>

        <option value="departmentAsc">
          Department (A-Z)
        </option>

        <option value="departmentDesc">
          Department (Z-A)
        </option>
      </select>

      <button onClick={onFilterClick}>
        Filter
      </button>

      <button
        className="add-user-btn"
        onClick={onAddUserClick}
      >
        + Add User
      </button>

    </div>
  );
}

export default Toolbar;