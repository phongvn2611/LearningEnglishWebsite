import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LoopIcon from "@material-ui/icons/Loop";
import ResetIcon from "@material-ui/icons/RotateLeft";
import SaveIcon from "@material-ui/icons/Save";
import InputCustom from "components/UI/InputCustom";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "redux/actions/messageAction";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import useTitle from "hooks/useTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from '@material-ui/core/styles';

const schema = yup.object().shape({
  Content: yup.string().trim().required("Input value"),
  Answer1: yup.string().trim().required("Input value"),
  Answer2: yup.string().trim().required("Input value"),
  Answer3: yup.string().trim().required("Input value"),
});

const useStyle = makeStyles(() => ({
  container: {
    margin: "3.2rem 0",
  },
  root: {
    padding: '2.8rem 3.6rem',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--bg-color-sec)',
  },

  title: {
    color: 'var(--title-color)',
    textTransform: 'capitalize',
    fontSize: '2.8rem',
    marginBottom: '1.2rem',
  },

  grid: {
    marginTop: '2.4rem',
    marginBottom: '2.4rem',
  },

  tooltipIcon: {
    fontSize: '1.6rem',
    color: 'var(--label-color)',
  },

  btn: {
    marginLeft: '1rem',
    textTransform: 'none',
    minWidth: '14rem',
  },

  btnReset: {
    borderColor: 'var(--accent-color) !important',
    color: 'var(--accent-color) !important',

    '&:hover, &:active': {
      filter: 'brightness(0.85)',
    },
  },

  sentenceInput: {
    minHeight: '8rem',
  },
}));

function CreateQuestionPage() {
  const classes = useStyle();

  useTitle("Create quiz");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const [question, setQuestion] = useState({
    content: "",
    answer1: "",
    answer2: "",
    answer3: "",
    check: [false, false, false],
  });

  const [indexCheck, setIndexCheck] = useState(-1);

  const handleChangeQuestion = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleCheck = (e) => {
    const isNotCheckAll = (arr) => arr.every((v) => v === false);
    const newArr = { ...question };
    if (isNotCheckAll(question.check)) {
      newArr.check[indexCheck] = true;
      setQuestion(newArr);
    } else {
      newArr.check = newArr.check.fill(false);
      newArr.check[indexCheck] = true;
      setQuestion(newArr);
    }
  };
  const handleUncheck = () => {
    const newArr = { ...question };
    newArr.check[indexCheck] = false;
    setQuestion(newArr);
  };
  const onSubmit = () => {};

  return (
    <div className="container">
      <div className={classes.container}>
        <div className="ani-fade">
          <div>
            <h1 className={classes.title}>Thêm câu hỏi</h1>
            <div className="dyno-break"></div>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Grid className={classes.grid} container spacing={3}>
                <Grid item xs={12}>
                  <InputCustom
                    className="w-100"
                    label="Câu hỏi"
                    error={Boolean(errors.Content)}
                    inputProps={{
                      name: "content",
                      ...register("Content"),
                    }}
                    onChange={handleChangeQuestion}
                  />
                  {errors.Content && (
                    <p className="text-error">{errors.Content?.message}</p>
                  )}
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputCustom
                    className="w-100"
                    label="Đáp án thứ nhất"
                    onChange={handleChangeQuestion}
                    name="answer1"
                    error={Boolean(errors.Answer1)}
                    inputProps={{
                      name: "answer1",
                      ...register("Answer1"),
                    }}
                    endAdornment={
                      question.check[0] === false ? (
                        <CheckIcon
                          className="dyno-setting-icon"
                          onMouseOver={() => setIndexCheck(0)}
                          onClick={handleCheck}
                        />
                      ) : (
                        <CheckCircleIcon
                          className="dyno-setting-icon"
                          onMouseOver={() => setIndexCheck(0)}
                          onClick={handleUncheck}
                        />
                      )
                    }
                  />

                  {errors.Answer1 && (
                    <p className="text-error">{errors.Answer1?.message}</p>
                  )}
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputCustom
                    className="w-100"
                    label="Đáp án thứ hai"
                    onChange={handleChangeQuestion}
                    error={Boolean(errors.Answer2)}
                    inputProps={{
                      name: "answer2",
                      ...register("Answer2"),
                    }}
                    endAdornment={
                      question.check[1] === false ? (
                        <CheckIcon
                          className="dyno-setting-icon"
                          onMouseOver={() => setIndexCheck(1)}
                          onClick={handleCheck}
                        />
                      ) : (
                        <CheckCircleIcon
                          className="dyno-setting-icon"
                          onMouseOver={() => setIndexCheck(1)}
                          onClick={handleUncheck}
                        />
                      )
                    }
                  />
                  {errors.Answer2 && (
                    <p className="text-error">{errors.Answer2?.message}</p>
                  )}
                </Grid>
                <Grid item xs={12} md={4}>
                  <InputCustom
                    className="w-100"
                    label="Đáp án thứ ba"
                    onChange={handleChangeQuestion}
                    error={Boolean(errors.Answer3)}
                    inputProps={{
                      name: "answer3",
                      ...register("Answer3"),
                    }}
                    endAdornment={
                      question.check[2] === false ? (
                        <CheckIcon
                          className="dyno-setting-icon"
                          onMouseOver={() => setIndexCheck(2)}
                          onClick={handleCheck}
                        />
                      ) : (
                        <CheckCircleIcon
                          className="dyno-setting-icon"
                          onMouseOver={() => setIndexCheck(2)}
                          onClick={handleUncheck}
                        />
                      )
                    }
                  />
                  {errors.Answer3 && (
                    <p className="text-error">{errors.Answer3?.message}</p>
                  )}
                </Grid>
              </Grid>
              <div className="dyno-break"></div>
              {/* button group */}
              <div className="d-flex flex-end jus-content-end pt-5 w-100">
                <Button
                  className={`${classes.btn} ${classes.btnReset}`}
                  color="secondary"
                  endIcon={<ResetIcon />}
                  variant="outlined"
                  disabled={submitting}
                  onClick={() => history.push("/admin/quiz")}
                >
                  Quay lại
                </Button>
                <Button
                  type="submit"
                  className={`${classes.btn} _btn _btn-primary`}
                  disabled={submitting}
                  endIcon={
                    submitting ? (
                      <LoopIcon className="ani-spin" />
                    ) : (
                      <SaveIcon />
                    )
                  }
                  variant="contained"
                >
                  Create
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuestionPage;
