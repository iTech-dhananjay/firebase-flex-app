import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {

  //Taking Info  from Github (https://api.github.com/users/Dhirubhai1234-png)
  return (
    <Card className="text-center mt-3 mb-4">
      <img src={user.avatar_url} className="img-thumbnail" />
      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-info">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-info">Followers {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
