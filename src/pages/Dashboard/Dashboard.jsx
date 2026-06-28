import { useState } from "react";

import { useUsers } from "../../hooks/useUsers";

import Toolbar from "../../components/Toolbar/Toolbar";
import UserTable from "../../components/UserTable/UserTable";
import Pagination from "../../components/Pagination/Pagination";
import FilterPopup from "../../components/FilterPopup/FilterPopup";

function Dashboard() {
  const {
    users,
    totalUsers,

    currentPage,
    setCurrentPage,

    rowsPerPage,
    setRowsPerPage,

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

      <Toolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
        onFilterClick={() => setIsFilterOpen(true)}
        onAddUserClick={() => {}}
      />

      <UserTable users={users} />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalUsers={totalUsers}
      />

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