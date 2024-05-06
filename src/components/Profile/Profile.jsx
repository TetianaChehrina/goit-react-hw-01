import css from "./Profile.module.css";

export default function Profile({
    userData: {
        username,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    },
})
{
    return (
    <div className={css.container}>
      <div className={css.card}>
        <img className={css.avatar} src={avatar} alt="User avatar" width="150" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span> <span>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span> <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
