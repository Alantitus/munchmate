import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const View = () => {
  const { id } = useParams();
  const [activeButton, setActiveButton] = useState("review");
  const review = () => {
    setActiveButton("review");
  };

  const time = () => {
    setActiveButton("time");
  };

  const direction = () => {
    setActiveButton("direction");
  };

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    if (localStorage.getItem("allProducts")) {
      const foundrestaurant = JSON.parse(localStorage.getItem("allProducts"));

      setRestaurant(foundrestaurant.find((item) => item.id == id));
    }
  }, []);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const getContent = () => {
    switch (activeButton) {
      case "review":
        return (
          restaurant && (
            <div
              style={{ maxHeight: "500px", overflowY: "auto" }}
              className="my-5"
            >
              {restaurant.reviews?.length ? (
                restaurant.reviews.map((review, index) => (
                  <div key={index} className=" text-zinc-900 p-2 mb-2">
                    <Card className="bg-zinc-100">
                      <Card.Body>
                        <p className="text-justify">
                          <strong>{review.name}:</strong> {review.comments}
                        </p>
                        <p>
                          <strong>Rating:</strong> {review.rating}
                        </p>
                        <p>
                          <strong>Dated:</strong> {review.date}
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          )
        );

      case "time":
        return (
          <ul className="text-decoration-none list-style-none py-5 border rounded-5 mt-5 text-zinc-900">
            {Object.entries(restaurant.operating_hours).map(([day, hours]) => (
              <li className="text-decoration-none list-style-none" key={day}>
                <strong>{day}:</strong> {hours}
              </li>
            ))}
          </ul>
        );
      case "direction":
        return (
          restaurant && (
            <iframe
              className="mt-5 border rounded-5"
              title="Restaurant Location"
              src={`https://maps.google.com/maps?q=${restaurant.latlng.lat},${restaurant.latlng.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0  }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div
        className="container container-fluid d-flex justify-content-center align-items-top text-white"
        style={{ marginTop: "80px" }}
      >
        <div className="row align-items-top my-5">
          <div className="col-lg-6">
            <img height={"100px"}
              width={"100%"}
              className="rounded"
              src={restaurant.photograph}
              alt=""
            />
          </div>
          <div className="col-lg-6 p-lg-5 mt-5 text-lg">
            <h6>Restuarant no: {restaurant.id}</h6>
            <h1 className="font-bold text-zinc-900">Name: {restaurant.name}</h1>
            <h5>Type: {restaurant.cuisine_type}</h5>
            <h5>City: {restaurant.neighborhood}</h5>
            <h5>Address: {restaurant.address}</h5>
            <div
              className="btn-group mt-5 text-white"
              role="group"
              aria-label="Content Toggle Buttons"
            >
              <button
                type="button"
                className="btn border btn-white text-dark"
                onClick={review} > Reviews </button>
              <button
                type="button"
                className="btn border btn-white text-dark"
                onClick={time}>Timing </button>
              <button
                type="button"
                className="btn border btn-white text-dark"
                onClick={direction}>Direction  </button>
            </div>
            <div id="contentDisplay">{getContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;