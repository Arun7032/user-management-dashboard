import { useState } from "react";

import { useUsers } from "../../hooks/useUsers";

import SearchBar from "../../components/SearchBar/SearchBar";
import UserTable from "../../components/UserTable/UserTable";
import FilterPopup from "../../components/FilterPopup/FilterPopup";

function Dashboard() {
  const {
    users,
    loading,
    error,

    searchTerm,
    setSearchTerm,

    sortOption,
    setSortOption,

    filters,
    setFilters,
  } = useUsers();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>User Management Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
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

        <button onClick={() => setIsFilterOpen(true)}>
          Filter
        </button>
      </div>

      <UserTable users={users} />

      <FilterPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
}

export default Dashboard;