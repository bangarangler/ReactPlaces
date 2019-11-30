import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jon Palacio",
      image:
        "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
