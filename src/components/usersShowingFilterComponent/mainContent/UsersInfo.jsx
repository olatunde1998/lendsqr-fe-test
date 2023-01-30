import axios from "axios";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const UsersInfo = () => {
  const baseURL =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  const [posts, setPosts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [value, setValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const handleFilterIcon = () => {
    setShowFilter(false);
  };

  const handleFilterButton = async (e) => {
    e.preventDefault();
    return await axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?q=${value}`
      )
      .then((response) => {
        setPosts(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(posts);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table>
        <thead className="details-heading">
          <tr>
            <th>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "rgba(33, 63, 125, 1)",
                }}
              >
                <div
                  className="organization-heading"
                  onClick={handleFilterIcon}
                >
                  Organization
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </div>
              </Link>
            </th>
            <th>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "rgba(33, 63, 125, 1)",
                }}
              >
                <div className="user-heading" onClick={handleFilterIcon}>
                  Username
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </div>
              </Link>
            </th>
            <th>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "rgba(33, 63, 125, 1)",
                }}
              >
                <div className="email-heading" onClick={handleFilterIcon}>
                  Email
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </div>
              </Link>
            </th>
            <th>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "rgba(33, 63, 125, 1)",
                }}
              >
                <div className="number-heading" onClick={handleFilterIcon}>
                  Phone Number
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </div>
              </Link>
            </th>
            <th>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "rgba(33, 63, 125, 1)",
                }}
              >
                <div className="date-heading" onClick={handleFilterIcon}>
                  Date joined
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </div>
              </Link>
            </th>
            <th>
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "rgba(33, 63, 125, 1)",
                }}
              >
                <div className="status-heading" onClick={handleFilterIcon}>
                  Status
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </div>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <div className="userinfo-container">
            {currentPosts.map((post, id) => (
              <li key={id} className="items-box">
                <span className="items-orgName">{post.orgName}</span>
                <span className="items-userName">{post.userName}</span>
                <span className="items-email">{post.email}</span>
                <span className="items-number">{post.phoneNumber}</span>
                <span className="items-date">{post.lastActiveDate}</span>
                <span className="dot-name">
                  <p className="items-status">{post.orgName}</p>
                  <BsThreeDotsVertical />
                </span>
              </li>
            ))}
          </div>
        </tbody>
      </table>
      <div className="paginate-box">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      {showFilter === true ? (
        <form onSubmit={handleFilterButton} className="form-element">
          <div className="form-organization-box">
            <span> Organization</span>
            <div className="organization-list-wrapper">
              <select className="organization-list" id="organization-list">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="form-username-box">
            <span>Username</span>
            <div className="input-wrapper">
              <input
                placeholder="User"
                type="text"
                className="form-username"
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-email-box">
            <span>Email</span>
            <div className="input-wrapper">
              <input
                placeholder="Email"
                type="email"
                className="form-email"
                required
              />
            </div>
          </div>
          <div className="form-date-box">
            <span>Date</span>
            <div className="input-wrapper">
              <input
                placeholder="Date"
                type="date"
                className="form-date"
                required
              />
            </div>
          </div>
          <div className="form-phoneNumber-box">
            <span>Phone Number</span>
            <div className="input-wrapper">
              <input
                placeholder="Date"
                type="number"
                className="form-phoneNumber"
                required
              />
            </div>
          </div>
          <div className="form-status-box">
            <span>Status</span>
            <div className="status-list-wrapper">
              <select className="status-list" id="status-list">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="form-buttons-box">
            <div className="button-wrapper">
              <button className="button-1">Reset</button>
              <button type="submit" className="button-2">
                Filter
              </button>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default UsersInfo;
