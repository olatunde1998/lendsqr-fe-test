import { MdFilterList } from "react-icons/md";

const UsersHeading = () => {
  return (
    <div>
      <div className="details-heading">
        <div className="organization-heading">
          <p>Organization</p>
          <span className="filter-icon">
            <MdFilterList />
          </span>
        </div>
        <div className="user-heading">
            Username
            <span className="filter-icon">
            <MdFilterList />
          </span>
        </div>
        <div className="email-heading">
            Email
            <span className="filter-icon">
            <MdFilterList />
          </span>
        </div>
        <div className="number-heading">
            Phone Number
            <span className="filter-icon">
            <MdFilterList />
          </span>
        </div>
        <div className="date-heading">
            Date joined
            <span className="filter-icon">
            <MdFilterList />
          </span>
        </div>
        <div className="status-heading">
            Status
            <span className="filter-icon">
            <MdFilterList />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersHeading;
