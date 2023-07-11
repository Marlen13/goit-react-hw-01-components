// import PropTypes from 'prop-types';
import css from './Friends.module.css'
import { FriendListItem } from './FriendListItem'
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
<FriendListItem />
</ul>
)
}