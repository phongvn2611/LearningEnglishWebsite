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
import { LISTEN_TOPIC } from './../../../constants/listeningTopics';
import { LISTEN_VIDEO } from './../../../constants';
import UploadButton from 'components/UI/UploadButton';
import { debounce } from 'helper';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InformationTooltip from './InformationTooltip';
import useStyle from './style';
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import GrammarItems from './GrammarItems/data';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const schema = yup.object().shape({
  Name: yup
    .string()
    .trim()
    .required('Input value'),
  Description: yup
    .string()
    .required('Input value'),
  Topic: yup
    .string()
    .required('Select one')
    .oneOf(LISTEN_TOPIC.map((i) => i.value)),
  LinkVideo: yup
    .string(),
  Script: yup
    .string(),
});

// Prevent unmount component topic select
const ButtonWrapper = (props) => <Grid {...props} item xs={12} md={6} lg={4} />;
const TagsWrapper = (props) => <Grid {...props} item xs={12} />;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
         <Grid>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



function CreateListening({ onSubmitForm, submitting }) {
  const classes = useStyle();
  const [resetFlag, setResetFlag] = useState(0);
  const [value, setValue] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const UploadVid = useRef(null);
  //const LinkVid = useRef(null);
  const Image = useRef(null);

  const onSubmit = (data) => {
    onSubmitForm({ ...data, VidUpload: UploadVid.current, Image: Image.current });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
  

  return (
    <div >
      <h1 className={classes.title}>Creat new listening in system</h1>
      <div className="dyno-break"></div>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Grid className={classes.grid} container spacing={3}>
          {/* new name */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Name (*)"
              error={Boolean(errors.Name)}
              inputProps={{
                autoFocus: true,
                name: 'Name',
                ...register('Name'),
              }}
            />
            {errors.Name && (
              <p className="text-error">{errors.Name?.message}</p>
            )}
          </Grid>

          {/* Description */}
          <Grid item xs={12} md={6} lg={4}>
            <InputCustom
              className="w-100"
              label="Description (*)"
              error={Boolean(errors.Description)}
              inputProps={{
                name: 'Description',
                ...register('Description'),
              }}
            />
            {errors.Description && (
              <p className="text-error">{errors.Description?.message}</p>
            )}
          </Grid>

          {/* topic */}
          <Grid item xs={12} md={6} lg={4}>
            <SelectCustom
              className="w-100"
              label="Topic (*)"
              options={LISTEN_TOPIC}
              error={Boolean(errors.Topic)}
              resetFlag={resetFlag}
              index={0}
              inputProps={{
                name: 'Topic',
                ...register('Topic'),
              }}
            />
            {errors.type && (
              <p className="text-error">{errors.Topic?.message}</p>
            )}
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6} lg={4}>
            <UploadButton
              title="Image"
              className="w-100"
              resetFlag={resetFlag}
              onChange={(imgSrc) => (Image.current = imgSrc)}
            />
          </Grid>

          <Box sx={{ width: "50%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="primary"
            >
              <Tab label="Upload" {...a11yProps(0)} />
              <Tab label="Link" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
                   {/* Image */}
            <Grid item xs={6}>
            <UploadButton
              title="Video"
              className="w-100 h-100"
              resetFlag={resetFlag}
              onChange={(vidSrc) => (UploadVid.current = vidSrc)}
            />
          </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
          <Grid item xs={6} >
            <InputCustom
              className="w-100"
              label="Link Video"
              multiline
              endAdornment={
                <InformationTooltip title="Input link youtube" />
              }
              inputProps={{
                name: 'LinkVideo',
                ...register('LinkVideo'),
              }}
            />

            {errors.Video && (
              <p className="text-error">{errors.Video?.message}</p>
            )}
          </Grid>

          </TabPanel>
        </Box>
                
              {/* {Script} */}
              <Grid item xs={12}>
            <InputCustom
              className="w-100"
              label="Script"
              multiline
              endAdornment={
                <InformationTooltip title="Input script for listening" />
              }
              error={Boolean(errors.Script)}
              inputProps={{
                name: 'Script',
                ...register('Script'),
              }}
            />
               {errors.Script && (
              <p className="text-error">{errors.Script?.message}</p>
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
           // onClick={onResetForm}
           >
            Reset
          </Button>
          <Button
            className={`${classes.btn} ${classes.btnReset}`}
            color="secondary"
            endIcon={<ResetIcon />}
            variant="outlined"
            disabled={submitting}
            onClick={handleClickToOpen}
           >
            Add Point
          </Button>
          <Button
            type="submit"
            className={`${classes.btn} _btn _btn-primary`}
            disabled={submitting}
            endIcon={
              submitting ? <LoopIcon className="ani-spin" /> : <SaveIcon />
            }
            variant="contained">
            Thêm từ
          </Button>
        </div>
      </form>

    </div>
  );
}

CreateListening.propTypes = {
  onSubmitForm: PropTypes.func,
  submitting: PropTypes.bool,
};

CreateListening.defaultProps = {
  onSubmitForm: function () {},
  submitting: false,
};

export default CreateListening;
