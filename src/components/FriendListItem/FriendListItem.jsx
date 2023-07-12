import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <li className={css.item}>
      <span className={
        isOnline ? `${css.status} ${css.green}`: `${css.status} ${css.red}`}>
          </span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{ name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar:PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}