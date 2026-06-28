import Modal from "../Modal/Modal";
import "./FilterPopup.css";

function FilterPopup({
  isOpen,
  onClose,
  filters,
  setFilters,
}) {
  function handleChange(event) {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleReset() {
    setFilters({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  }

  function handleApply() {
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      title="Filter Users"
      onClose={onClose}
    >
      <div className="filter-popup">

        <div className="form-group">
          <label>First Name</label>

          <input
            type="text"
            name="firstName"
            value={filters.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>

          <input
            type="text"
            name="lastName"
            value={filters.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="text"
            name="email"
            value={filters.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Department</label>

          <select
            name="department"
            value={filters.department}
            onChange={handleChange}
          >
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Operations">Operations</option>
            <option value="Support">Support</option>
            <option value="IT">IT</option>
          </select>
        </div>

        <div className="filter-actions">
          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            className="apply-btn"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>

      </div>
    </Modal>
  );
}

export default FilterPopup;