// import React from "react";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// import MUIDataTable from "mui-datatables";

// // components
// import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

// // data
// import mock from "../dashboard/mock";

// const datatableData = [
//   ["Joe James", "Example Inc.", "Yonkers", "NY"],
//   ["John Walsh", "Example Inc.", "Hartford", "CT"],
//   ["Bob Herm", "Example Inc.", "Tampa", "FL"],
//   ["James Houston", "Example Inc.", "Dallas", "TX"],
//   ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
//   ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
//   ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
//   ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
//   ["Meral Elias", "Example Inc.", "Hartford", "CT"],
//   ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
//   ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
//   ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
//   ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
//   ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
//   ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
//   ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
//   ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
// ];

// const useStyles = makeStyles(theme => ({
//   tableOverflow: {
//     overflow: 'auto'
//   }
// }))

// export default function Tables() {
//   const classes = useStyles();
//   return (
//     <>
//       <PageTitle title="Tables" />
//       <Grid container spacing={4}>
//         <Grid item xs={12}>
//           <MUIDataTable
//             title="Employee List"
//             data={datatableData}
//             columns={["Name", "Company", "City", "State"]}
//             options={{
//               filterType: "checkbox",
//             }}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
//             <Table data={mock.table} />
//           </Widget>
//         </Grid>
//       </Grid>
//     </>
//   );
// }






// import React, { useState } from "react";
// import { Grid, Typography, Button, Modal, IconButton, TextField } from "@material-ui/core";
// import CloseIcon from '@material-ui/icons/Close';
// import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import useStyles from "../typography/styles";

// export default function Tables() {
//   const classes = useStyles();

//   // Sample questions data
//   const initialQuestions = [
//     {
//       id: 1,
//       question: "How do I reset my password?",
//       image: null,
//       askedBy: "User123",
//       askedAt: "May 7, 2024",
//       answer: "you should go to your profile then click section with", // Empty string to store the answer
//     },
//     {
//       id: 2,
//       question: "How can I change my profile picture?",
//       image: "https://images.unsplash.com/photo-1714476942067-89165abdc1b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       askedBy: "User456",
//       askedAt: "May 6, 2024",
//       answer: "", // Empty string to store the answer
//     },
//   ];

//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalQuestion, setModalQuestion] = useState("");
//   const [modalQuestionId, setModalQuestionId] = useState(null);
//   const [modalImage, setModalImage] = useState(null);
//   const [answerText, setAnswerText] = useState("");

//   const handleOpenModal = (question, id, image) => {
//     setModalQuestion(question);
//     setModalQuestionId(id);
//     setModalImage(image);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     // Clear the answer text when the modal is closed
//     setAnswerText("");
//   };

//   const handleAnswerChange = (event) => {
//     const { value } = event.target;
//     setAnswerText(value);
//   };

//   const handleSubmitAnswer = () => {
//     // Update the answer for the current modal question
//     const updatedQuestions = initialQuestions.map((question) =>
//       question.id === modalQuestionId ? { ...question, answer: answerText } : question
//     );
//     // Update the state with the new questions data
//     // This will cause a re-render and reflect the changes in the UI
//     // setInitialQuestions(updatedQuestions);
//     // Close the modal after submitting the answer
//     handleCloseModal();
//   };

//   return (
//     <>
//       <PageTitle title="Questions Asked" />
//       <Grid container spacing={4}>
//         {initialQuestions.map((question) => (
//           <Grid item xs={12} key={question.id}>
//             <Widget
//               title={`Question #${question.id}`}
//               disableWidgetMenu
//             >
//               <div className={classes.dashedBorder}>
//                 <Typography variant="body1">{question.question}</Typography>
//                 {question.answer ? (
//                                   <Typography style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }} variant="body1"><span style={{ fontWeight: 'bold' }}>ANSWER</span> <span style={{ fontWeight: 'normal', fontStyle: 'italic' }}>{question.answer}</span></Typography>

//                 ): 
//                 (
//                   <Typography style={{ marginTop: '10px', marginBottom: '10px', color: 'red', marginLeft: '10px' }} variant="body1">No Answer Yet</Typography>
//                 )}
//                 <Typography variant="caption" className={classes.text}>
//                   Asked by: {question.askedBy} - {question.askedAt}
//                 </Typography><br />
//                 {question.image && (
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     onClick={() => handleOpenModal(question.question, question.id, question.image)}
//                     className={classes.viewImageButton}
//                   >
//                     View Image
//                   </Button>
//                 )}
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   onClick={() => handleOpenModal(question.question, question.id, null)}
//                   className={classes.viewImageButton}
//                 >
//                   Answer
//                 </Button>
//               </div>
//             </Widget>
//           </Grid>
//         ))}
//       </Grid>
//       <Modal
//         open={modalOpen}
//         onClose={handleCloseModal}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//         style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <div style={{ position: 'relative', width: '80%', maxWidth: '800px', background: '#fff', padding: '20px' }}>
//           {modalImage ? (
//             <>
//               <img
//                 src={modalImage}
//                 alt="Question"
//                 style={{ width: '100%', height: 'auto' }}
//               />
//               <IconButton
//                 style={{ position: 'absolute', top: '10px', right: '10px' }}
//                 onClick={handleCloseModal}
//               >
//                 <CloseIcon />
//               </IconButton>
//             </>
//           ) : (
//             <>
//               <Typography variant="body1">{modalQuestion}</Typography>
//               <IconButton
//                 style={{ position: 'absolute', top: '10px', right: '10px' }}
//                 onClick={handleCloseModal}
//               >
//                 <CloseIcon />
//               </IconButton>
//               <div>
//                 {/* Display answer text area in the modal */}
//                 <TextField
//                   multiline
//                   rows={4}
//                   fullWidth
//                   label="Your Answer"
//                   variant="outlined"
//                   value={answerText}
//                   onChange={handleAnswerChange}
//                   className={classes.answerField}
//                 />
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSubmitAnswer}
//                 >
//                   Submit Answer
//                 </Button>
//               </div>
//             </>
//           )}
//         </div>
//       </Modal>
//     </>
//   );
// }








import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Modal, IconButton, TextField } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import useStyles from "../typography/styles";
import AuthService from "../../services/auth/auth_service";

export default function Tables() {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalQuestion, setModalQuestion] = useState("");
  const [modalQuestionId, setModalQuestionId] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [answerText, setAnswerText] = useState("");

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/questions/?token=${sessionStorage.getItem('token')}`);

    socket.onopen = () => {
      console.log('Connected to WebSocket');
      socket.send(JSON.stringify({ command: 'fetch_all_questions', filter_by_user: false }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.command === 'fetch_all_questions') {
        const receivedQuestions = data.questions;
        setQuestions(receivedQuestions);
        console.log(receivedQuestions);
      } else if (data.command === 'new_question') {
        // setQuestions((prevQuestions) => [...prevQuestions, data.question]); appear chini
        setQuestions((prevQuestions) => [data.question, ...prevQuestions]); // appear juu

      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleOpenModal = (question, id, image) => {
    setModalQuestion(question);
    setModalQuestionId(id);
    setModalImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setAnswerText("");
  };

  const handleAnswerChange = (event) => {
    const { value } = event.target;
    setAnswerText(value);
  };



  const handleSubmitAnswer = async () => {
    // Update the answer for the current modal question
    console.log(answerText);
    const data = {
      question_id: modalQuestionId,
      message: answerText
    };
  
    try {
      const response = await AuthService.postAnswer(data);
      console.log(response);
  
      if (response.status === 201) {
        // Update the question with the new answer
        const updatedQuestions = questions.map((question) =>
          question.id === modalQuestionId ? { ...question, answers: [{ message: answerText }] } : question
        );
        setQuestions(updatedQuestions);
        handleCloseModal();
      } else {
        console.error('Failed to post answer:', response.statusText);
        //Alert.alert('Error', 'Failed to post answer. Please try again later.');
      }
    } catch (error) {
      console.error('Network error:', error);
     // Alert.alert('Error', 'Failed to post answer. Please check your network connection.');
    }
  };
  

  return (
    <>
      <PageTitle title="Questions Asked" />
      <Grid container spacing={4}>
        {questions.map((question, index) => (
          <Grid item xs={12} key={index}>
            <Widget
              title={`Question #${index + 1}`}
              disableWidgetMenu
            >
              <div className={classes.dashedBorder}>
                <Typography variant="body1" style={{ marginTop: 20 }}>
                  {question.message}
                </Typography>
                {question.answers && question.answers.length > 0 ? (
                  <Typography style={{ fontWeight: 'bold', marginTop: 10, marginBottom: 10, marginLeft: 10 }} variant="body1">
                    <span style={{ fontWeight: 'bold',  }}>ANSWER:</span>
                    <span style={{ fontWeight: 'normal', fontStyle: 'italic', color: 'green' }}> {question.answers[0].message}</span>
                  </Typography>
                ) : (
                  // <Typography style={{ marginTop: 10, marginBottom: 10, color: 'red', marginLeft: 10 }} variant="body1">No Answer Yet</Typography>
                  <Typography style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }} variant="body1"><span style={{ fontWeight: 'bold' }}>ANSWER:</span> <span style={{ fontWeight: 'normal', fontStyle: 'italic', color: 'red' }}>No Answer Yet</span></Typography>

                )}
                {/* <Typography variant="caption" className={classes.text}>
                  Asked by: {question.created_by} - {question.created_time} Ago
                </Typography><br /> */}



                {question.image && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenModal(question.message, question.id, question.image)}
                    className={classes.viewImageButton}
                    style={{ marginTop: 20 }}
                  >
                    View Image
                  </Button>
                )}

                {question.answers && question.answers.length > 0 ? (
                  null
                ) : (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenModal(question.message, question.id, null)}
                    className={classes.viewImageButton}
                    style={{ marginTop: 20, marginLeft: 10 }}
                  >
                    Answer
                  </Button>
                )}



                <Typography variant="caption" className={classes.text} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <span style={{ fontWeight: 'bold' }}>Uploaded by: <span style={{ color: 'blue' }}>{question.created_by}</span></span>
                  <span>{question.created_time} Ago</span>
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
          {modalImage ? (
            <>
              <img
                src={'http://localhost:8000' + modalImage}
                alt="Question"
                style={{ width: '100%', height: 'auto' }}
              />
              <IconButton
                style={{ position: 'absolute', top: '10px', right: '10px' }}
                onClick={handleCloseModal}
              >
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Typography variant="body1">{modalQuestion}</Typography>
              <IconButton
                style={{ position: 'absolute', top: '10px', right: '10px' }}
                onClick={handleCloseModal}
              >
                <CloseIcon />
              </IconButton>
              <div>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  label="Your Answer"
                  variant="outlined"
                  value={answerText}
                  onChange={handleAnswerChange}
                  className={classes.answerField}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmitAnswer}
                  style={{ marginTop: 20 }}
                >
                  Submit Answer
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
