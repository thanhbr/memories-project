import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px'
  },
  root: {
    '& .MuiTextField-root': {
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: '16px !important'
  }
}))