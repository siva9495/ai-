import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
const Description = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const gender = searchParams.get("gender");
  const diagnosis = searchParams.get("diagnosis");
  const link = searchParams.get("link");

  return (
    <>
      <Header />
      <div className="flex-container">
        <main className="main-content">
          <h2>Patient Information</h2>

          <table className="table-container">
            <tr className="table-header">
              <th>Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Diagnosis</th>
            </tr>
            <tr className="table-cell">
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{gender}</td>
              <td>{diagnosis}</td>
            </tr>
          </table>
          <div className="description-container">
            <h4>Description:</h4>
            <p>
              {name} is a resilient {age}-year-old {gender} who finds herself
              confined to a hospital bed, grappling with the aftermath of a
              life-altering car accident. Despite the physical pain and
              emotional turmoil, theres an undeniable strength emanating from
              her spirit. Her determination to overcome the hurdles placed
              before her is palpable, evident in the focused gaze that meets the
              challenges head-on.
            </p>
          </div>
          {/* <video width="640" height="360" controls>
      <source src={videoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
          {link && (
            <iframe
              width="640"
              height="360"
              src={link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Description;
