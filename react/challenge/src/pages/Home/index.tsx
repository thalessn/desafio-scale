import React, { useEffect, useState } from "react";
import api from "../../service/api";
import ReactPaginate from "react-paginate";
import "./index.css";
import Card from "../../components/Card";

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    async function loadUsers(): Promise<void> {
      const { data: response } = await api.get("/users");
      setPageCount(response.total_pages);
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  const handlePageClick = async (item: { selected: number }) => {
    const { data: response } = await api.get("/users", {
      params: {
        page: item.selected + 1,
      },
    });
    setUsers(response.data);
  };

  return (
    <div className="main">
      <div className="items">
        {users && users.map((user) => <Card key={user.id} user={user} />)}
      </div>

      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        previousLabel={"<"}
        nextLabel={">"}
        onPageChange={handlePageClick}
        containerClassName={"pagination-test"}
        disabledClassName={"pagination-disable"}
        activeLinkClassName={"pagination-active"}
        previousLinkClassName={"pagination-previous"}
      />
    </div>
  );
};

export default Home;
