import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LoopIcon from '@material-ui/icons/Loop';
import ResetIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';
import wordApi from 'apis/wordApi';
import InputCustom from 'components/UI/InputCustom';
import SelectCustom from 'components/UI/SelectCustom';
import TopicSelect from 'components/UI/TopicSelect';
import { MAX, WORD_LEVELS, WORD_SPECIALTY, WORD_TYPES } from './../../../constants';
import UploadButton from 'components/UI/UploadButton';
import { debounce } from 'helper';
import PropTypes from 'prop-types';
import React, { useRef, useState,  useEffect  } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from 'redux/actions/messageAction';
import * as yup from 'yup';
import InformationTooltip from './../AddWord/InformationTooltip';
import PhoneticInput from './../AddWord/PhoneticInput';
import useStyle from './style';
import { useParams } from 'react-router-dom';
import {getWord } from './../../../redux/actions/wordAction';
import { useHistory } from "react-router-dom";

let delayTimer = null;

const schema = yup.object().shape({
  word: yup
    .string()
    .trim()
    .required('Hãy nhập một từ vào đây')
    .lowercase()
    .max(MAX.WORD_LEN, `Từ dài tối đã ${MAX.WORD_LEN} ký tự`),
  mean: yup
    .string()
    .trim()
    .lowercase()
    .required('Hãy nhập ý nghĩa từ')
    .max(MAX.MEAN_WORD_LEN, `Từ dài tối đã ${MAX.MEAN_WORD_LEN} ký tự`),
  phonetic: yup
    .string()
    .trim()
    .lowercase()
    .required('Hãy nhập ký âm của từ')
    .max(MAX.PHONETIC_LEN, `Từ dài tối đã ${MAX.PHONETIC_LEN} ký tự`),
  type: yup
    .string()
    .required('Chọn loại của từ')
    .oneOf(WORD_TYPES.map((i) => i.value)),
  level: yup
    .string()
    .required('Chọn cấp bậc của từ')
    .oneOf(WORD_LEVELS.map((i) => i.value)),
  specialty: yup
    .string()
    .required('Chọn cấp bậc của từ')
    .oneOf(WORD_SPECIALTY.map((i) => i.value)),
  examples: yup
    .string()
    .max(MAX.EXAMPLE_WORD_LEN, `Ví dụ tối đa ${MAX.EXAMPLE_WORD_LEN} ký tự`),
  synonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Từ đồng nghĩa tối đa ${MAX.SYNONYMS_WORD_LEN} ký tự`,
    ),
  antonyms: yup
    .string()
    .max(
      MAX.SYNONYMS_WORD_LEN,
      `Từ trái nghĩa tối đa ${MAX.SYNONYMS_WORD_LEN} ký tự`,
    ),
  note: yup
    .string()
    .max(MAX.NOTE_WORD_LEN, `Ghi chú tối đa ${MAX.NOTE_WORD_LEN} ký tự`),
});

const analysisExample = (exampleStr = '', word = '') => {
  if (typeof exampleStr !== 'string' || exampleStr === '') {
    return [];
  }

  const exampleArr = exampleStr.split('\n');
  for (let str of exampleArr) {
    if (str.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) === -1) {
      return false;
    }
  }

  return exampleArr;
};

const getTypeCurrent = (type = '', options=[]) => {

  for (let i=0; i< options.length; i++) {
    if (options[i].value === type) {
      return i;
    }
  }
  return 0;
};

const getStringCurrent = (ar = []) => {
  let str='';

  if(ar[0])
  {
    str += ar[0];
  }
  for (let i=1; i< ar.length; i++) {
    if (ar[i]) {
      str += '\n' + ar[i];
    }
  }
  return str;
};


// Prevent unmount component topic select
const ButtonWrapper = (props) => <Grid {...props} item xs={12} md={6} lg={4} />;
const TagsWrapper = (props) => <Grid {...props} item xs={12} />;

function WordContribution() {
  const classes = useStyle();
  const [resetFlag, setResetFlag] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch()
  const id = useParams().id;
  const wordData = useSelector((state) => state.wordReducer.wordData)
 
  useEffect(() => dispatch(getWord(id)), [dispatch])

  const topics = useRef([]);
  const picture = useRef(null);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const { examples, synonyms, antonyms, phonetic, word, ...rest } = data;
      // check examples validation
      const exampleArr = analysisExample(examples, word);
      if (typeof exampleArr === 'boolean' && !exampleArr) {
        dispatch(setMessage("Câu ví dụ phải chứa từ vựng mới.", "warning"));
        setSubmitting(false);
        return;
      }

      // split synonyms string to an array synonyms
      const synonymArr = synonyms !== '' ? synonyms.split('\n') : [];

      // split antonyms string to an array synonyms
      const antonymArr = antonyms !== '' ? antonyms.split('\n') : [];

      // call API
      const dataSend = {
        ...rest,
        examples: exampleArr,
        synonyms: synonymArr,
        antonyms: antonymArr,
        topics: topics.current,
        picture: picture.current,
        phonetic: phonetic.replaceAll('/', ''),
      };
      console.log(dataSend)
      const apiRes = await wordApi.putWord(wordData._id ,dataSend);

      if (apiRes.status === 200) {
        dispatch(setMessage("Update word successfully", "success"));
        setSubmitting(false);
        history.push("/admin/word");
     }

    } catch (error) {
      const message =  error.response?.data?.message ||
      'Error, can not create word.';
        dispatch(setMessage(message, "error"));
      setSubmitting(false);
    }
  };


 const onLoadingForm = () => {
    const initialValues = {
      word: wordData.word,
      mean: wordData.mean,
      phonetic: wordData.phonetic,    
      examples:getStringCurrent(wordData.examples),
      synonyms:getStringCurrent(wordData.synonyms),
      antonyms: getStringCurrent(wordData.antonyms),
      note: wordData.note,
    };
    reset(initialValues);
 };

 function handleClickGoBack() {
  history.push("/admin/word");
}

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Thêm từ mới của bạn vào Dynonary</h1>
      <div className="dyno-break"></div>

{wordData && (
      <form onSubmit={handleSubmit(onSubmit)} onLoad={onLoadingForm} autoComplete="off">
        <Grid className={classes.grid} container spacing={3}>
          {/* new word */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Word"              
              value={wordData.word}                                      
            />            
          </Grid>

          {/* mean */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Meaning"
              error={Boolean(errors.mean)}
              inputProps={{
                maxLength: MAX.MEAN_WORD_LEN,
                name: 'mean',              
                ...register('mean'),
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
            resetFlag={resetFlag}
            inputProps={{
              maxLength: MAX.PHONETIC_LEN,
              name: 'phonetic',
            }}
            register={register('phonetic')}
          />

          {/* word type */}
          <Grid item xs={12} md={6} lg={4}>
            <SelectCustom
              className="w-100"
              label="Type (*)"
              options={WORD_TYPES}
              error={Boolean(errors.type)}
              resetFlag={resetFlag}              
              index={getTypeCurrent(wordData.type, WORD_TYPES)}                       
              inputProps={{
                name: 'type',
                ...register('type'),
              }}
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
              resetFlag={resetFlag}
              index={getTypeCurrent(wordData.level, WORD_LEVELS)}
              inputProps={{ name: 'level', ...register('level') }}
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
              resetFlag={resetFlag}
              index={getTypeCurrent(wordData.specialty, WORD_SPECIALTY)}
              inputProps={{
                name: 'specialty',
                ...register('specialty'),
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
                name: 'examples',
                ...register('examples'),
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
                name: 'synonyms',
                ...register('synonyms'),
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
                name: 'antonyms',
                ...register('antonyms'),
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
                name: 'note',
                ...register('note'),
              }}
            />
            {errors.note && (
              <p className="text-error">{errors.note?.message}</p>
            )}
          </Grid>

          {/* picture */}
          <Grid item xs={12} md={6} lg={4}>
            <UploadButton
              title="Thêm ảnh minh hoạ"
              className="w-100 h-100"
              resetFlag={resetFlag}
              onChange={(imgSrc) => (picture.current = imgSrc)}
            />
          </Grid>

          {/* word topics */}
          <TopicSelect
            onChange={(topicList) => (topics.current = topicList)}
            resetFlag={resetFlag}
            buttonTitle="Thêm chủ đề"
            buttonWrapper={ButtonWrapper}
            tagsWrapper={TagsWrapper}
          />
        </Grid>

        <div className="dyno-break"></div>
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
            GO BACK
          </Button>
          <Button
            type="submit"
            className={`${classes.btn} _btn _btn-primary`}
            disabled={submitting}
            endIcon={
              submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
            }
            variant="contained">
            EDIT
          </Button>
         
        </div>
      </form>
)}
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