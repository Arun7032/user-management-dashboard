import Modal from "../Modal/Modal";
import "./FilterPopup.css";

function FilterPopup({
  isOpen,
  onClose,
  filters,
  setFilters,
}) {
  return (
    <Modal
      isOpen={isOpen}
      title="Filter Users"
      onClose={onClose}
    >
      <input
        placeholder="First Name"
        value={filters.firstName}
        onChange={(e) =>
          setFilters({
            ...filters,
            firstName: e.target.value,
          })
        }
      />

      <input
        placeholder="Last Name"
        value={filters.lastName}
        onChange={(e) =>
          setFilters({
            ...filters,
            lastName: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        value={filters.email}
        onChange={(e) =>
          setFilters({
            ...filters,
            email: e.target.value,
          })
        }
      />

      <select
        value={filters.department}
        onChange={(e)=>
          setFilters({
            ...filters,
            department:e.target.value
          })
        }
      >

        <option value="">All Departments</option>

        <option>Engineering</option>
        <option>HR</option>
        <option>Finance</option>
        <option>Marketing</option>
        <option>Sales</option>
        <option>Operations</option>
        <option>Support</option>
        <option>IT</option>

      </select>

      <div className="filter-buttons">

        <button onClick={onClose}>
          Apply
        </button>

        <button
          onClick={()=>
          setFilters({
            firstName:"",
            lastName:"",
            email:"",
            department:""
          })}
        >
          Reset
        </button>

      </div>

    </Modal>
  );
}

export default FilterPopup;