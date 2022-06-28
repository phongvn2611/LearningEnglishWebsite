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
} from "./../../../constants";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { setMessage } from "redux/actions/messageAction";
import * as yup from "yup";
import InformationTooltip from "./InformationTooltip";
import PhoneticInput from "./PhoneticInput";
import useStyle from "./style";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import useTitle from "hooks/useTitle";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

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

// Prevent unmount component topic select
const ButtonWrapper = (props) => <Grid {...props} item xs={12} md={6} lg={4} />;
const TagsWrapper = (props) => <Grid {...props} item xs={12} />;

function WordContribution({ onSubmitForm, submitting }) {
  useTitle("Add word");

  const classes = useStyle();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const topics = useRef([]);
  const history = useHistory();
  const defaultImg =
  "https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png";
  const [image, setImage] = useState(defaultImg);

  const convertImageToBase64 = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

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
      convertImageToBase64(file).then(res => {
        setImage(res);
      });
      
    } catch (err) {
      throw err;
    }
  };

  const onSubmit = (data) => {
    onSubmitForm({ ...data, topics: topics.current, picture: image });
  };

  return (
    <div>
      <h1 className={classes.title}>Thêm từ mới</h1>
      <div className="english-break"></div>

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
              label="Từ mới (*)"
              error={Boolean(errors.word)}
              inputProps={{
                autoFocus: true,
                maxLength: MAX.WORD_LEN,
                name: "word",
                ...register("word"),
              }}
              // onChange={(e) => handleCheckWordExistence(e, null)}
            />
            {errors.word && (
              <p className="text-error">{errors.word?.message}</p>
            )}
          </Grid>

          {/* mean */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Nghĩa của từ (*)"
              error={Boolean(errors.mean)}
              inputProps={{
                maxLength: MAX.MEAN_WORD_LEN,
                name: "mean",
                ...register("mean"),
              }}
            />
            {errors.mean && (
              <p className="text-error">{errors.mean?.message}</p>
            )}
          </Grid>

          {/* phonetic */}
          <PhoneticInput
            errorMessage={errors.phonetic?.message}
            error={Boolean(errors.phonetic)}
            valuePhonetic=""
            inputProps={{
              maxLength: MAX.PHONETIC_LEN,
              name: "phonetic",
            }}
            register={register("phonetic")}
          />

          {/* word type */}
          <Grid item xs={12} md={6} lg={4}>
            <SelectCustom
              className="w-100"
              label="Loại từ (*)"
              options={WORD_TYPES}
              error={Boolean(errors.type)}
              index={0}
              inputProps={{
                name: "type",
                ...register("type"),
              }}
              // onChange={(e) => handleCheckWordExistence(null, e)}
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
              index={0}
              inputProps={{ name: "level", ...register("level") }}
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
              index={0}
              inputProps={{
                name: "specialty",
                ...register("specialty"),
              }}
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
              multiline
              endAdornment={
                <InformationTooltip title="Thêm các câu ví dụ cho từ trên. Đảm bảo có sự xuất hiện của từ đó trong câu. Bạn có thể thêm nhiều câu bằng cách xuống dòng." />
              }
              error={Boolean(errors.examples)}
              inputProps={{
                name: "examples",
                ...register("examples"),
              }}
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
              error={Boolean(errors.synonyms)}
              inputProps={{
                name: "synonyms",
                ...register("synonyms"),
              }}
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
              error={Boolean(errors.antonyms)}
              inputProps={{
                name: "antonyms",
                ...register("antonyms"),
              }}
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
              endAdornment={
                <InformationTooltip title="Nhập thêm ghi chú mà bạn muốn cho từ. Thêm nhiều dòng bằng cách xuống dòng." />
              }
              error={Boolean(errors.note)}
              inputProps={{
                name: "note",
                ...register("note"),
              }}
            />
            {errors.note && (
              <p className="text-error">{errors.note?.message}</p>
            )}
          </Grid>

          <TopicSelect
            onChange={(topicList) => (topics.current = topicList)}
            buttonTitle="Thêm chủ đề"
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
            onClick={() => history.replace("/admin/word")}
          >
            Quay lại
          </Button>
          <Button
            type="submit"
            className={`${classes.btn} _btn _btn-primary`}
            disabled={submitting}
            endIcon={
              submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
            }
            variant="contained"
          >
            Thêm từ
          </Button>
        </div>
      </form>
    </div>
  );
}

WordContribution.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

WordContribution.defaultProps = {
  onSubmitForm: function () {},
  submitting: false,
};

export default WordContribution;
