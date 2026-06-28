
import { useState } from "react";

import { useUsers } from "../../hooks/useUsers";

import Toolbar from "../../components/Toolbar/Toolbar";
import UserTable from "../../components/UserTable/UserTable";
import Pagination from "../../components/Pagination/Pagination";
import FilterPopup from "../../components/FilterPopup/FilterPopup";
import Modal from "../../components/Modal/Modal";
import UserForm from "../../components/UserForm/UserForm";

function Dashboard() {
  const {
    users,

    loading,
    error,

    totalUsers,

    currentPage,
    setCurrentPage,

    rowsPerPage,
    setRowsPerPage,

    searchTerm,
    setSearchTerm,

    sortOption,
    setSortOption,

    filters,
    setFilters,

    addUser,
    editUser,
    removeUser,
  } = useUsers();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [isAddOpen, setIsAddOpen] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [editingUser, setEditingUser] = useState(null);

  if (loading) {
    return <h2>Loading Users...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  function handleEdit(user) {
    setEditingUser(user);
    setIsEditOpen(true);
  }

  function handleDelete(id) {
    removeUser(id);
  }

  function handleAdd(user) {
    addUser(user);
    setIsAddOpen(false);
  }

  function handleUpdate(user) {
    editUser(user);
    setIsEditOpen(false);
    setEditingUser(null);
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
        onAddUserClick={() => setIsAddOpen(true)}
      />

      <UserTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

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

      {/* ADD USER */}

      <Modal
        isOpen={isAddOpen}
        title="Add User"
        onClose={() => setIsAddOpen(false)}
      >
        <UserForm
          initialData={{
            firstName: "",
            lastName: "",
            email: "",
            department: "",
          }}
          submitText="Save User"
          onSubmit={handleAdd}
        />
      </Modal>

      {/* EDIT USER */}

      <Modal
        isOpen={isEditOpen}
        title="Edit User"
        onClose={() => {
          setIsEditOpen(false);
          setEditingUser(null);
        }}
      >
        {editingUser && (
          <UserForm
            initialData={editingUser}
            submitText="Update User"
            onSubmit={handleUpdate}
          />
        )}
      </Modal>
    </>
  );
}

export default Dashboard;