/**
 * @copyright 2024 sanusi
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        `flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group dark:ring-zinc-200 dark:hover:bg-sky-500 ` +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hiddens w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors dark:bg-zinc-50 dark:group-hover:bg-zinc-50">
        <img src={imgSrc} alt={label} height={32} width={32} />
      </figure>
      <div>
        <h3 className="dark:text-zinc-600 dark:group-hover:text-zinc-50">
          {label}
        </h3>
        <p className="text-zinc-400 text-sm dark:group-hover:text-zinc-200">
          {desc}
        </p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default SkillCard;
