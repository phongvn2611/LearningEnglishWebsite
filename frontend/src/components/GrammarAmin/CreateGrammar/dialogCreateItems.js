// import React, { useEffect, useState } from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { actGetListQuestion } from "../Question/Modules/actions";

// const schema = yup.object().shape({
//   Point: yup.string().required("Input point of grammar"),
//   Examples: yup.string().required("Input examples of point"),
// });

// const useStyles = makeStyles((theme) => ({
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   formControl: {
//     width: "100%",
//   },
//   button: {
//     marginRight: "8px",
//   },
// }));

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography color="secondary" variant="h3" align="center">
//         {children}
//       </Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// export default function ManageDialog(props) {
//   const { openDialog, setOpenDialog, handleCloseDialog, modal, quiz } = props;
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const { register, handleSubmit, errors } = useForm({
//     mode: "onBlur",
//     resolver: yupResolver(schema),
//   });
//   const [grammarItems, setgrammarItems] = useState([]);
  
//   const [point, setPoint] = useState({
//     Point: "",
//     Examples: "",
//   });
//   const handleChange = (event) => {
//     const {name, value} = event.target;
//     setPoint({[name]: value});
//   };

//   const onAddSubmit = () => {
//   setgrammarItems(...grammarItems, point)
//   };

//   return (
//     <div>
//       <Dialog maxWidth="xs" onClose={handleCloseDialog} open={openDialog}>
//         <DialogTitle onClose={handleCloseDialog}>{modal.title}</DialogTitle>
//         <DialogContent dividers>
//           <form className={classes.form} noValidate>
              
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             type="submit"
//             className={classes.button}
//             variant="contained"
//             color="secondary"
//             onClick={modal.id === "tao" ? handleSubmit(onAddSubmit) : null}
//           >
//             {modal.button}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
