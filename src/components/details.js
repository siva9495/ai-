import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const details = () => {
  const data = [
    {
      id: 1,
      name: "Rakesh",
      age: "23",
      gender: "Male",
      date: "10/11/2023",
      time: "12:00am",
      diagnosis: "Contract Surgery",
      video: "",
      size: "218KB",
    },
    {
      id: 2,
      name: "Ramesh",
      age: "26",
      gender: "Male",
      date: "07/02/2023",
      time: "09:00am",
      diagnosis: "Root Canal Treatment",
      video: "",
      size: "100KB",
    },
    {
      id: 3,
      name: "Riya",
      age: "33",
      gender: "Female",
      date: "05/01/2023",
      time: "10:00am",
      diagnosis: "Open Heart surgery",
      video: "",
      size: "288KB",
    },
    {
      id: 4,
      name: "Gopi",
      age: "17",
      gender: "Male",
      date: "06/12/2025",
      time: "10:40am",
      diagnosis: "Appindix",
      video: "",
      size: "800KB",
    },
    {
      id: 5,
      name: "Laxman",
      age: "75",
      gender: "Male",
      date: "07/05/2022",
      time: "06:00pm",
      diagnosis: "Appindix",
      video: "",
      size: "1.1MB",
    },
  ];
  const videoLinks = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/PLSKmeAV43M?si=UjtTDuya-HUiCmaO&amp;controls=0",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/ZxrBoC13MNk?si=ULaQQI4HJwrZQvMa&amp;controls=0",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/lHVE4MbfZ6I?si=VaLsAhuvcRK_G8R6",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/oWq-nAz_fwU?si=pBPAe3OdSb-X4T5Y",
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/8AOB2PtHfVM?si=ddGfnoXFiQM6DYqR",
    },
  ];

  return (
    <>
      <Header />
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Time</th>
              <th>Diagnosis</th>
              <th>Video</th>
              <th>File Size</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.diagnosis}</td>
                <td style={{ textAlign: "center" }}>
                  {videoLinks.map((video) => {
                    if (video.id === item.id) {
                      return (
                        <Link
                          to={{
                            pathname: "/description",
                            search: `?id=${item.id}&name=${item.name}&age=${item.age}&gender=${item.gender}&diagnosis=${item.diagnosis}&link=${video.link}`,
                          }}
                          key={video.id}
                        >
                          <button className="videoButton">Watch Video</button>
                        </Link>
                      );
                    }
                    return null;
                  })}
                </td>
                <td>{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default details;
