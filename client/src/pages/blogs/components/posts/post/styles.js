import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  media: {
    height: '0',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
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
  cardAction: {
    display: 'block !important',
    width: '100%',
    textAlign: 'start'
  }
})) 