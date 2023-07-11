// import PropTypes from 'prop-types';
import css from './Friends.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <li className={css.item}>
          <span className={css.status}></span>
          <img className={css.avatar} src="" alt="User avatar" width="48" />
          <p className={css.name}></p>
    </li>
  );
};
