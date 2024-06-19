
import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, Modal, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import useStyles from "./styles";

export default function ComplaintsPage() {
  const classes = useStyles();
  const [complaints, setComplaints] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      const command = data.command;

      if (command === 'fetch_all_complaints') {
        const receivedComplaints = data.complaints;
        setComplaints(receivedComplaints);
      } else if (command === 'new_complaint') {
        setComplaints((prevComplaints) => [data.complaint, ...prevComplaints]);

      }
    };

    const socket = new WebSocket(`ws://localhost:8000/ws/complaints/?token=${sessionStorage.getItem('token')}`);
    socket.onopen = () => {
      console.log('Connected to WebSocket');
      // Send a command to fetch all complaints when connected
      // socket.send(JSON.stringify({ command: 'fetch_all_complaints' }));
      socket.send(JSON.stringify({ command: 'fetch_all_complaints', filter_by_user: false }));
    };
    socket.onmessage = handleMessage;

    // Close WebSocket connection when component unmounts
    return () => {
      socket.close();
    };
  }, []);



  const handleOpenModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <PageTitle title="Complaints" />
      <Grid container spacing={4}>
        {complaints.map((complaint, index) => (
          <Grid item xs={12} key={index}>
            <Widget title={`Complaint #${index + 1}`} disableWidgetMenu>
              <div className={classes.dashedBorder}>
                <Typography variant="body1">
                  {complaint.message}
                </Typography>
                {complaint.image && (
                  <div>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ marginTop: '20px' }}
                      onClick={() => handleOpenModal(complaint.image)}
                      className={classes.viewImageButton}
                    >
                      View Image
                    </Button>
                  </div>
                )}
               <Typography variant="caption" className={classes.text} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <span style={{ fontWeight: 'bold' }}>Uploaded by: <span style={{color: 'blue'}}>{complaint.created_by}</span></span>
                  <span>{complaint.created_time} Ago</span>
                </Typography>

              </div>
            </Widget>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ position: 'relative', width: '80%', maxWidth: '800px', background: '#fff', padding: '20px' }}>
          {modalImage && (
            <img
              src={'http://localhost:8000' + modalImage}
              alt="Complaint"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          <IconButton
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Modal>
    </>
  );
}

