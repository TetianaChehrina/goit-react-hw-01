import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const status = isOnline === true ? "Online" : "Offline";
    return (
        <div className={css.friend_card}>
            <img className={css.avatar} src={avatar} alt="User avatar" width="80" />
            <p className={css.name}>{name}</p>
            <p className={isOnline === true ? css.online : css.offline}>{status}</p>
        </div>
    );
}