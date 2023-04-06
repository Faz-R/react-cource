import classes from './index.module.css';

const Loader = () => {
  return (
    <div className={classes.wrapper} data-testid="loader">
      <div className={classes.lds_spinner}>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
        <div className={classes.spin}></div>
      </div>
    </div>
  );
};

export default Loader;
