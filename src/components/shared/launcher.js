import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Grow from '@mui/material/Grow';
import Skeleton from '@mui/material/Skeleton';
import { useDispatchTheme } from '../../context/theme.context';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'absolute',
    zIndex: '1300',
    backgroundColor: theme.palette.background.default,
    filter: 'blur(.5rem)',
    width: '100%',
    height: '100%',
  },
  launch: {
    backgroundColor: 'inherit',
    zIndex: 1300,
    right: '.8rem',
    left: '.8rem',
    top: '.8rem',
    bottom: '.8rem',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    '& > *': {
      flex: 'auto',
      display: 'flex',
      paddingLeft: '.8rem',
      borderTop: '1px solid',
      borderBottom: '1px solid',
    },
  },
  inner: {
    display: 'flex',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  splash: {
    justifyContent: 'center',
    borderTop: 0,
    width: '100%',
    display: 'flex',
    flex: '0 0 auto',
  },
  skeletonBottom: {
    left: '1.8rem',
    right: '1.8rem',
    position: 'fixed',
    height: '2em',
  },
  title: {
    lineHeight: 2,
    fontWeight: 500,
    display: 'flex',
    zIndex: 1500,
    fontSize: '2.5rem',
  },
  subTitle: {
    fontSize: '2.5rem',
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  skeleton: {
    top: '.3rem',
    display: 'flex',
    height: '4px',
    flex: '0 0 auto',
    border: 0,
  },
}));

const Launcher = () => {
  const classes = useStyles();
  const viewDispatch = useDispatchTheme();
  const [open, setOpen] = useState(true);
  const [showOpen, setShowOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowOpen(false);
      setTimeout(() => {
        setOpen(false);
        viewDispatch.setValue('search');
      }, 350);
    }, 2500);
  }, []);

  return <>
    <Backdrop className={classes.backdrop} open={open} />
    <Grow in={showOpen} unmountOnExit>
      <Box p={2} className={classes.launch}>
        <Skeleton
          className={classes.skeleton}
          width="100%"
          variant="rectangular"
          height="3px"
          animation="wave"
        />
        <div className={classes.inner}>
          <Typography
            className={classes.title}
            component="h1"
            variant="h5"
            noWrap
          >
            Synonym
          </Typography>
          <Typography
            className={classes.subTitle}
            component="h2"
            variant="h5"
            noWrap
          >
            /Search
          </Typography>
        </div>
        <div className={classes.splash}>
          <Typography variant="subtitle1">
            An Interactive Thesaurus App
          </Typography>
          <Skeleton
            variant="rectangular"
            className={classes.skeletonBottom}
          />
        </div>
      </Box>
    </Grow>
  </>;
};

export default Launcher;
