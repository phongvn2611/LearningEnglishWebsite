import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import quizApi from "apis/quizApi";
import questionApi from "apis/questionApi";
import { dictionaryRoot } from "../components/UI/style";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setMessage } from "redux/actions/messageAction";
import CheckIcon from "@material-ui/icons/Check";
import useTitle from 'hooks/useTitle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'

import { deleteQuestion } from "redux/actions/questionAction";

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

export default function QuizDetailPage() {

  useTitle('Quiz detail');

  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [quizID, settQuizID] = useState(null);
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    (async function () {
      const apiRes = await quizApi.getQuizByListen(id);
      setQuiz(apiRes.data);
      settQuizID(apiRes.data ? apiRes.data._id : null);
    })();
    return () => {};
  }, [id]);

  useEffect(() => {
    (async function () {
      if (quizID === null) {
        return;
      }
      const apiRes = await questionApi.getQuestionByQuiz(quizID);
      setQuestions(apiRes.data.questions);
    })();
    return () => {};
  }, [quizID]);

  const deleteHandler = (id) => {
    try{
    if (window.confirm('Bạn chắc chắn muốn xóa câu hỏi này?')) {
     dispatch(deleteQuestion(id))
       dispatch(setMessage("Delete successfully", "success"));
        window.location.reload();
      }
    }
    catch {

      dispatch(setMessage("Không thể xóa câu hỏi", "error"));
    }
  };

  const handleAddQuiz = async () => {
    try {
      const apiRes = await quizApi.postQuizByListen(id);
      if (apiRes) {
        dispatch(setMessage("Create quiz successfully", "success"));
        window.location.reload();
      }
    } catch (error) {
      dispatch(setMessage(error.response.data.message));
    }
  };
  return (
    <div className={`${classes.root} dyno-container`}>
      <div className="flex-center-between">
        <h1 className="dyno-title">Quiz</h1>
        {quiz && (
          <AddIcon
            className="dyno-setting-icon mr-5"
            onClick={() => history.push(`/admin/quiz/add/${id}/${quizID}`)}
          />
        )}
      </div>
      <div className="dyno-break"></div>
      {quiz ? (
        questions ? (
          questions.map((question, index) => (
            <>  <div className={`${classes.root} flex-center-between`}>
            <div key={index} className="mb-6">
              <Typography variant="h5">{question.Content}</Typography>
              {question.Answers.map((answer, index) => (
                <div key={index} className="d-flex">
                  <Typography variant="body2" className="mb-2">
                    {answer.content}
                  </Typography>
                  {answer.isCorrect && <CheckIcon className="ml-3" />}
                </div>))}
              
            </div>
           
            <div className="flex-center--ver">
                <div className="mr-5">
                  <EditIcon className="dyno-setting-icon"
                    onClick={() => history.push(`/admin/quiz/edit/${id}/${question._id}`)} 
                  />
                </div>
                <DeleteIcon className="dyno-setting-icon"
                  onClick={() => deleteHandler(question._id)} 
                  />

              </div>
              </div></>
           
          ))
        ) : (
          <Typography className="mt-5" variant="h5">
            Chưa có câu hỏi nào trong quiz
          </Typography>
        )
      ) : (
        <div>
          <Typography className="mt-5 mb-5" variant="h5">
            Bài nghe chưa có quiz
          </Typography>
          <Button className="_btn _btn-primary" onClick={handleAddQuiz}>
            Thêm quiz
          </Button>
        </div>
      )}

<Button color='primary' onClick={() => history.push("/admin/quiz")}>GO BACK</Button>
    </div>

  );
}
