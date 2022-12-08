import { Link } from "react-router-dom";

const CardComponent = ({ users }) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={users.avatar_url}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{users.login}</h5>
          <p className="card-text">{users.bio}</p>
          <Link to={`/user/${users.id}`}>
            <button className="btn btn-primary">
              Click to see detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
