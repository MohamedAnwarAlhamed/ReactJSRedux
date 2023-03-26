import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";
function USERCONTAINER({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  },[]);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        <ol>
          {userData &&
            userData.users &&
            userData.users.map((user) => <li>{user.name}</li>)}
        </ol>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(USERCONTAINER);
