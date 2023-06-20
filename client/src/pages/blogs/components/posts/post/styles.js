import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative'
  },
  media: {
    height: '150px'
  },
  overplay: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    color: 'white'
  },
  overplay2: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "black",
    borderRadius: "50%",
    color: 'white',
    width: '30px',
    opacity: '0.7'
  },
  details: {
    marginLeft: '16px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})) 