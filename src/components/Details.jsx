import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import firebase from '../FIREBASE/firebase';

const Details = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchVideoUrls = async () => {
      try {
        const storageRef = firebase.storage().ref();
        const videosFolderRef = storageRef.child('cameraVideos');
        const videoList = await videosFolderRef.listAll();
        const urls = await Promise.all(
          videoList.items.map(async (videoRef) => {
            const url = await videoRef.getDownloadURL();
            return url;
          })
        );
        setVideoUrls(urls);
      } catch (error) {
        console.error('Error fetching video URLs:', error);
      }
    };

    fetchVideoUrls();
  }, []);

  const handleDialogOpen = (url) => {
    const dialog = document.getElementById('my-dialog');
    dialog.showModal();
    document.body.classList.add('blur');
    const iframe = document.getElementById('video-iframe');
    iframe.src = url;
  };

  const handleDialogClose = () => {
    const dialog = document.getElementById('my-dialog');
    dialog.close();
    document.body.classList.remove('blur');
  };

  const handleEditDetails = () => {
    history.push('/edit-details');
  };

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
              <th>Edit Details</th>
            </tr>
          </thead>
          <tbody>
            {videoUrls.map((url, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Name</td>
                <td>Age</td>
                <td>Gender</td>
                <td>Date</td>
                <td>Time</td>
                <td>Diagnosis</td>
                <td style={{ textAlign: 'center' }}>
                  <button className="videoButton" onClick={() => handleDialogOpen(url)}>
                    Watch Video
                  </button>
                </td>
                <td>
                    <button className="editButton" onClick={handleEditDetails}>
                        Edit Details
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my-dialog">
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button className="dialog_button" onClick={handleDialogClose}>
            Close
          </button>
        </div>
        
        <iframe
          id="video-iframe"
          width="640"
          height="360"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </dialog>
      <Footer />
    </>
  );
};

export default Details;
