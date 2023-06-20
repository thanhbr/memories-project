import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  },
  fileInput: {
    width: '100%'
  },
  buttonSubmit: {
    background: '#423fff !important',
    color: 'white !important'
  },
  buttonClear: {
    background: '#ff3f3f !important',
    color: 'white !important'
  }
})) 