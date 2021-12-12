import { makeStyles } from '@material-ui/core/styles';

const imgSize = '4.8rem',
  iconSize = '2.4rem';

export default makeStyles((theme) => ({
  navWrapper: {
    paddingBottom: 'var(--nav-height)',
  },

  nav: {
    backgroundColor: 'var(--bg-color-sec)',
    height: 'var(--nav-height)',
    boxShadow: 'var(--box-shadow)',

    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
  },

  auth: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  
  name: {
    fontSize: '1.6rem',
    fontWeight: 600,
    marginLeft: '0.5rem'
  },

  logo: {
    marginRight: '0.8rem',
    width: 'auto !important',
  },

  imgSize: {
    height: imgSize,
    width: imgSize,
  },

  iconSize: {
    fontSize: `${iconSize} !important`,
    color: 'var(--label-color)',
  },

  control: {
    marginLeft: 'auto',
  },

  avt: {
    transition: theme.transitions.easing.easeIn,
    '&:hover, &:active': {
      opacity: 0.85,
    },
  },

  searchIcon: {
    fontSize: iconSize,
    color: 'var(--label-color)',
  },

  loginBtn: {
    height: '3.7rem',
    minWidth: '12rem',
  },

  loginLabel: {
    fontSize: '1.4rem',
  },

  registerBtn: {
    height: '3.7rem',
    minWidth: '12rem',
    marginRight: '1.4rem'
  },

  registerLabel: {
    fontSize: '1.4rem',
  },

  bbcleNavButton: { 
    cursor: "pointer",
    fontSize:"16px",
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#68C2E8",
    fontFamily: "Lucida Sans Unicode",
},
bgp: {
  mozBoxSizing: "content-box",
  webkitBoxSizing: "content-box",
  boxSizing: "content-box",
  margin: "0 auto",
  maxWidth: "1024px",
  minWidth: "240px",
  width: "auto",
},

_lienket: {       
  backgroundColor: "white",
  color: "black",
  border: "2px solid #73AD21",
  borderRadius: "5px",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  fontFamily: "Lucida Sans Unicode",
},


 
}));
