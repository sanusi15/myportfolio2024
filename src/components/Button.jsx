/**
 * @copyright 2024 sanusi
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */

const ButtonPrimary = ({ href, target = "_self", label, icon, clases }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${clases}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${clases}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  clases: PropTypes.string
};

/**
 * Outline Button
 */

const ButtonOutline = ({ href, target = "_self", label, icon, clases }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${clases}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${clases}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  clases: PropTypes.string
};

export { ButtonPrimary, ButtonOutline };
