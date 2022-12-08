import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchDataFromUrl } from "../util/commonfunctions.js";

const CardComponentDetail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    cardDetail();
  }, []);

  const cardDetail = async () => {
    const baseUrl = `http://localhost:3000/users/${id}`;
    const userDetail = await FetchDataFromUrl(baseUrl);
    setUserData(userDetail);
    console.log(id);
    console.log(userDetail);
  };

  return (
    <>
      <h1>Detaiil</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={userData.avatar_url}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{userData.login}</h5>
              <p className="card-text">{userData.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <Link to={`/`}>
        <button className="btn btn-primary"> Back To List</button>
      </Link>
    </>
  );
};
export default CardComponentDetail;
