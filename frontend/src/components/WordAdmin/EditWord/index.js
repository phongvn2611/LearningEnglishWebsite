import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LoopIcon from "@material-ui/icons/Loop";
import ResetIcon from "@material-ui/icons/RotateLeft";
import SaveIcon from "@material-ui/icons/Save";
import wordApi from "apis/wordApi";
import InputCustom from "components/UI/InputCustom";
import SelectCustom from "components/UI/SelectCustom";
import TopicSelect from "components/UI/TopicSelect";
import {
  MAX,
  WORD_LEVELS,
  WORD_SPECIALTY,
  WORD_TYPES,
} from "constants/index";
import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setMessage } from "redux/actions/messageAction";
import * as yup from "yup";
import InformationTooltip from "./../AddWord/InformationTooltip";
import PhoneticInput from "./../AddWord/PhoneticInput";
import useStyle from "./style";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { convertImageToBase64 } from "helper/index";
import useTitle from 'hooks/useTitle';

const schema = yup.object().shape({
  word: yup
    .string()
    .trim()
    .required("Hãy nhập một từ vào đây")
    .lowercase()
    .max(MAX.WORD_LEN, `Từ dài tối đã ${MAX.WORD_LEN} ký tự`),
  mean: yup
    .string()
    .trim()
    .lowercase()
    .required("Hãy nhập ý nghĩa từ")
    .max(MAX.MEAN_WORD_LEN, `Từ dài tối đã ${MAX.MEAN_WORD_LEN} ký tự`),
  phonetic: yup
    .string()
    .trim()
    .lowercase()
    .required("Hãy nhập ký âm của từ")
    .max(MAX.PHONETIC_LEN, `Từ dài tối đã ${MAX.PHONETIC_LEN} ký tự`),
  type: yup
    .string()
    .required("Chọn loại của từ")
    .oneOf(WORD_TYPES.map((i) => i.value)),
  level: yup
    .string()
    .required("Chọn cấp bậc của từ")
    .oneOf(WORD_LEVELS.map((i) => i.value)),
  specialty: yup
    .string()
    .required("Chọn cấp bậc của từ")
    .oneOf(WORD_SPECIALTY.map((i) => i.value)),
  examples: yup
    .string()
    .max(MAX.EXAMPLE_WORD_LEN, `Ví dụ tối đa ${MAX.EXAMPLE_WORD_LEN} ký tự`),
  synonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Từ đồng nghĩa tối đa ${MAX.SYNONYMS_WORD_LEN} ký tự`
    ),
  antonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Từ trái nghĩa tối đa ${MAX.SYNONYMS_WORD_LEN} ký tự`
    ),
  note: yup
    .string()
    .max(MAX.NOTE_WORD_LEN, `Ghi chú tối đa ${MAX.NOTE_WORD_LEN} ký tự`),
});

const analysisExample = (exampleStr = "", word = "") => {
  if (typeof exampleStr !== "string" || exampleStr === "") {
    return [];
  }

  const exampleArr = exampleStr.split("\n");
  for (let str of exampleArr) {
    if (str.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) === -1) {
      return false;
    }
  }

  return exampleArr;
};

const getTypeCurrent = (type = "", options = []) => {
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === type) {
      return i;
    }
  }
  return 0;
};

// Prevent unmount component topic select
const ButtonWrapper = (props) => <Grid {...props} item xs={12} md={6} lg={4} />;
const TagsWrapper = (props) => <Grid {...props} item xs={12} />;

function EditWord() {
  useTitle('Edit word');
  const classes = useStyle();
  const [submitting, setSubmitting] = useState(false);
  const defaultImg =
    "https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png";

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { id } = useParams();

  const [phonetic, setPhonetic] = useState('');

  const [wordValue, setWordValue] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async function () {
      const apiRes = await wordApi.getWord(id);
      apiRes.data.examples = apiRes.data.examples.join('\n');
      apiRes.data.synonyms = apiRes.data.synonyms.join('\n');
      apiRes.data.antonyms = apiRes.data.antonyms.join('\n');
      setWordValue(apiRes.data);
      setPhonetic(apiRes.data.phonetic)
      setImage(apiRes.data.picture);
    })();
    return () => {};
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWordValue({ ...wordValue, [name]: value });
  }

  const handleChangePicture = (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) {
        dispatch(setMessage("No files were uploaded", "error"));
      }
      if (file.size / 1024 ** 2 > 2) {
        dispatch(setMessage("Size too large", "error"));
      }
      convertImageToBase64(file).then((res) => {
        setImage(res);
      });
    } catch (err) {
      throw err;
    }
  };
  const topics = useRef([]);
  const onSubmit = async (e) => {
    try {
      setSubmitting(true);
      const { examples, synonyms, antonyms, word, ...rest } = wordValue;
      // check examples validation
      const exampleArr = analysisExample(examples, word);
      if (typeof exampleArr === "boolean" && !exampleArr) {
        dispatch(setMessage("Câu ví dụ phải chứa từ vựng mới.", "warning"));
        setSubmitting(false);
        return;
      }

      // split synonyms string to an array synonyms
      const synonymArr = synonyms !== "" ? synonyms.split("\n") : [];

      // split antonyms string to an array synonyms
      const antonymArr = antonyms !== "" ? antonyms.split("\n") : [];

      // call API
      const dataSend = {
        ...rest,
        examples: exampleArr,
        synonyms: synonymArr,
        antonyms: antonymArr,
        topics: topics.current,
        picture: image,
        phonetic: phonetic.replaceAll("/", ""),
      };

      const apiRes = await wordApi.putWord(id, dataSend);

      if (apiRes) {
        dispatch(setMessage("Update word successfully", "success"));
        setSubmitting(false);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Error, can not update word.";
      dispatch(setMessage(message, "error"));
      setSubmitting(false);
    }
  };


  function handleClickGoBack() {
    history.push("/admin/word");
  }

  return (
     <div >
      <h1 className={classes.title}>Sửa từ</h1>
      <div className="english-break"></div>

      {wordValue && (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid container alignContent="center">
            <div className={classes.avtWrap}>
              <img
                src={image ? image : defaultImg}
                alt=""
                className={`${classes.avt} w-100 h-100`}
              />
              <div className={`${classes.cameraIconWrap} flex-center`}>
                <CameraIcon className={classes.cameraIcon} />
                <input
                  type="file"
                  className={classes.fileInput}
                  onChange={handleChangePicture}
                  accept="image/*"
                />
              </div>
            </div>
          </Grid>
          <Grid className={classes.grid} container spacing={3}>
            {/* new word */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Word"
                value={wordValue.word}
              //  onChange={handleChange}
              />
            </Grid>

            {/* mean */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Meaning"
                value={wordValue.mean}
                error={Boolean(errors.mean)}
                inputProps={{
                  maxLength: MAX.MEAN_WORD_LEN,
                  name: "mean",
                  ...register("mean"),
                }}
                onChange={handleChange}
              />
              {errors.mean && (
                <p className="text-error">{errors.mean?.message}</p>
              )}
            </Grid>

            {/* phonetic */}
            <PhoneticInput
              errorMessage={errors.phonetic?.message}
              error={Boolean(errors.phonetic)}
              value={wordValue.phonetic}
              inputProps={{
                maxLength: MAX.MEAN_WORD_LEN,
                name: "phonetic",
              }}
              register={register("phonetic")}
              onChange={handleChange}
            />

            {/* word type */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Type (*)"
                options={WORD_TYPES}
                error={Boolean(errors.type)}
                index={getTypeCurrent(wordValue.type, WORD_TYPES)}
                inputProps={{
                  name: "type",
                  ...register("type"),
                }}
                onChange={handleChange}
              />
              {errors.type && (
                <p className="text-error">{errors.type?.message}</p>
              )}
            </Grid>

            {/* word level */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Cấp bậc của từ (*)"
                options={WORD_LEVELS}
                error={Boolean(errors.level)}
                index={getTypeCurrent(wordValue.level, WORD_LEVELS)}
                inputProps={{ name: "level", ...register("level") }}
                onChange={handleChange}
              />
              {errors.level && (
                <p className="text-error">{errors.level?.message}</p>
              )}
            </Grid>

            {/* word specialty */}
            <Grid item xs={12} md={6} lg={4}>
              <SelectCustom
                className="w-100"
                label="Thuộc chuyên ngành"
                options={WORD_SPECIALTY}
                error={Boolean(errors.specialty)}
                index={getTypeCurrent(wordValue.specialty, WORD_SPECIALTY)}
                inputProps={{
                  name: "specialty",
                  ...register("specialty"),
                }}
                onChange={handleChange}
              />
              {errors.specialty && (
                <p className="text-error">{errors.specialty?.message}</p>
              )}
            </Grid>

            {/* examples */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Câu ví dụ"
                value={wordValue.examples}
                multiline
                endAdornment={
                  <InformationTooltip title="Thêm các câu ví dụ cho từ trên. Đảm bảo có sự xuất hiện của từ đó trong câu. Bạn có thể thêm nhiều câu bằng cách xuống dòng." />
                }
                error={Boolean(errors.examples)}
                inputProps={{
                  name: "examples",
                  ...register("examples"),
                }}
                onChange={handleChange}
              />

              {errors.examples && (
                <p className="text-error">{errors.examples?.message}</p>
              )}
            </Grid>

            {/* synonyms */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Các từ đồng nghĩa"
                multiline
                value={wordValue.synonyms}
                error={Boolean(errors.synonyms)}
                inputProps={{
                  name: "synonyms",
                  ...register("synonyms"),
                }}
                onChange={handleChange}
              />
              {errors.synonyms && (
                <p className="text-error">{errors.synonyms?.message}</p>
              )}
            </Grid>

            {/* antonyms */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Các từ trái nghĩa"
                multiline
                value={wordValue.antonyms}
                error={Boolean(errors.antonyms)}
                inputProps={{
                  name: "antonyms",
                  ...register("antonyms"),
                }}
                onChange={handleChange}
              />
              {errors.antonyms && (
                <p className="text-error">{errors.antonyms?.message}</p>
              )}
            </Grid>

            {/* note */}
            <Grid item xs={12} md={6} lg={4}>
              <InputCustom
                className="w-100"
                label="Ghi chú"
                multiline
                value={wordValue.note}
                endAdornment={
                  <InformationTooltip title="Nhập thêm ghi chú mà bạn muốn cho từ. Thêm nhiều dòng bằng cách xuống dòng." />
                }
                error={Boolean(errors.note)}
                inputProps={{
                  name: "note",
                  ...register("note"),
                }}
                onChange={handleChange}
              />
              {errors.note && (
                <p className="text-error">{errors.note?.message}</p>
              )}
            </Grid>

            {/* word topics */}
            <TopicSelect
              onChange={(topicList) => (topics.current = topicList)}
              buttonTitle="Chọn chủ đề"
              buttonWrapper={ButtonWrapper}
              tagsWrapper={TagsWrapper}
            />
          </Grid>

          <div className="english-break"></div>
          {/* button group */}
          <div className="d-flex flex-end jus-content-end pt-5 w-100">
            <Button
              className={`${classes.btn} ${classes.btnReset}`}
              color="secondary"
              endIcon={<ResetIcon />}
              variant="outlined"
              // disabled={}
              onClick={() => handleClickGoBack()}
            >
              Back
            </Button>
            <Button
              type="submit"
              className={`${classes.btn} _btn _btn-primary`}
              disabled={submitting}
              endIcon={
                submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
              }
              variant="contained"
              onClick={() => onSubmit()}
            >
              Sửa từ
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

EditWord.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

EditWord.defaultProps = {
  onSubmitForm: function () {},
  submitting: false,
};

export default EditWord;
