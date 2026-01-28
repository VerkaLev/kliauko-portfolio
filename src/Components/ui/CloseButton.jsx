export default function CloseButton({ handleCloseClick, ariaLabel, classes }) {
  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      onClick={handleCloseClick}
    >
      X
    </button>
  );
}
