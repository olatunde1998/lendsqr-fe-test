import Pagination from "components/usersShowingFilterComponent/mainContent/Pagination";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdFilterList } from "react-icons/md";
import { Link } from "react-router-dom";
import { APIRequest } from "utils/APIRequest";
import { formatDate, getUserStatus } from "utils/utils";

const UsersInfo = () => {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    APIRequest.get("/users").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table>
        <thead className="details-heading">
          <tr>
            <th>
              <div className="organization-heading">
                Organization
                <Link
                  to="/usersFilters"
                  style={{
                    color: "rgba(84, 95, 125, 1)",
                    textDecoration: "none",
                  }}
                >
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </Link>
              </div>
            </th>
            <th>
              <div className="user-heading">
                Username
                <Link
                  to="/usersFilters"
                  style={{
                    color: "rgba(84, 95, 125, 1)",
                    textDecoration: "none",
                  }}
                >
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </Link>
              </div>
            </th>
            <th>
              <div className="email-heading">
                Email
                <Link
                  to="/usersFilters"
                  style={{
                    color: "rgba(84, 95, 125, 1)",
                    textDecoration: "none",
                  }}
                >
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </Link>
              </div>
            </th>
            <th>
              <div className="number-heading">
                Phone Number
                <Link
                  to="/usersFilters"
                  style={{
                    color: "rgba(84, 95, 125, 1)",
                    textDecoration: "none",
                  }}
                >
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </Link>
              </div>
            </th>
            <th>
              <div className="date-heading">
                Date joined
                <Link
                  to="/usersFilters"
                  style={{
                    color: "rgba(84, 95, 125, 1)",
                    textDecoration: "none",
                  }}
                >
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </Link>
              </div>
            </th>
            <th>
              <div className="status-heading">
                Status
                <Link
                  to="/usersFilters"
                  style={{
                    color: "rgba(84, 95, 125, 1)",
                    textDecoration: "none",
                  }}
                >
                  <span className="filter-icon">
                    <MdFilterList />
                  </span>
                </Link>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
            {currentPosts.map((post, id) => (
              <Link key={id} to={`/users/${post.id}`} style={{textDecoration: "none", color: "#213f7d"}}>
              <li className="items-box">
                <span className="items-orgName">{post.orgName}</span>
                <span className="items-userName">{post.userName}</span>
                <span className="items-email">{post.email}</span>
                <span className="items-number">{post.phoneNumber}</span>
                <span className="items-date">{formatDate(post.lastActiveDate)}</span>
                <span className="dot-name">
                  <p className={`items-status ${getUserStatus(post.lastActiveDate)}`}>{getUserStatus(post.lastActiveDate)}</p>
                  <span className="three-dot">
                    <BsThreeDotsVertical size={20} />
                  </span>
                </span>
              </li>
              </Link>
            ))}
        </tbody>
      </table>
      <div className="paginate-box">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default UsersInfo;
