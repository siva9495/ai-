import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import firebase from '../FIREBASE/firebase';

const Details = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [videoNames, setVideoNames] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const storageRef = firebase.storage().ref();
        const videosFolderRef = storageRef.child('cameraVideos');
        const videoList = await videosFolderRef.listAll();
        const urls = await Promise.all(
          videoList.items.map(async (videoRef) => {
            const url = await videoRef.getDownloadURL();
            const metaData = await videoRef.getMetadata();
            const videoName = metaData.name;
            return { url, videoName };
          })
        );

        const names = await Promise.all(
          videoList.items.map(async (videoRef) => {
            const metaData = await videoRef.getMetadata();
            const videoName = metaData.name;
            return videoName;
          })
        );

        setVideoNames(names);
        setVideoUrls(urls);

        const videoDetailsPromises = names.map(async (videoName) => {
          const [sanitizedVideoName] = videoName.split('.');
          const snapshot = await firebase.database().ref(`userDetails/${sanitizedVideoName}`).once('value');
          return snapshot.val();
        });
        const details = await Promise.all(videoDetailsPromises);
        const videoDetailsMap = Object.fromEntries(names.map((name, index) => [name, details[index]]));
        setVideoDetails(videoDetailsMap);
      
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
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

  const handleEditDetails = (url, name) => {
    history.push({
      pathname: '/edit-details',
      state: { url, name }
    });
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
            {videoUrls.map((video, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{videoDetails[videoNames[index]]?.name || '-'}</td>
                <td>{videoDetails[videoNames[index]]?.age || '-'}</td>
                <td>{videoDetails[videoNames[index]]?.gender || '-'}</td>
                <td>{videoDetails[videoNames[index]]?.date || '-'}</td>
                <td>{videoDetails[videoNames[index]]?.time || '-'}</td>
                <td>{videoDetails[videoNames[index]]?.diagnosis || '-'}</td>
                <td style={{ textAlign: 'center' }}>
                  <button className="videoButton" onClick={() => handleDialogOpen(video.url)}>
                    Watch Video
                  </button>
                </td>
                <td>
                  <button className="editButton" onClick={() => handleEditDetails(video.url, videoNames[index])}>
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
