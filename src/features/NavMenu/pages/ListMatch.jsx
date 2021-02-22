import React from "react";

function ListMatch({ data }) {
  return (
    <div className="list-match">
      <div className="users-hide">
        <div className="border">
          <div className="users-hide__img"></div>
          <div className="number-center">{data.length}</div>
          <div className="text">{data.length} Likes</div>

          <div className="icon-heart">
            <i className="bi bi-heart-half"></i>
          </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div className="user-match" key={index}>
          <div
            className="user-match__img"
            style={{ backgroundImage: `url(${item.url})` }}
          ></div>
          <div className="user-match__name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ListMatch;
