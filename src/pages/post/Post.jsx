import { useParams } from "react-router-dom";

import classes from "./Post.module.css";

const Post = ({ posts }) => {
  // 日付を取得する関数
  const formatDate = (isoString, separator) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}${separator}${month}${separator}${day}`;
  };

  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  return (
    <div className={classes.post}>
      <div className="inner">
        <div className={classes.post__img}>
          <img src={post.thumbnailUrl} alt={post.title} />
        </div>
        <div className={classes.post__contents}>
          <div className={classes.post__header}>
            <div className={classes.post__date}>
              <time dateTime={formatDate(post.createdAt, '-')}>
                {formatDate(post.createdAt, '/')}
              </time>
            </div>
            <div className={classes.post__categories}>
              {post.categories.map((category) => (
                <p>{category}</p>
              ))}
            </div>
          </div>
          <div className={classes.post__title}>
            <p>{post.title}</p>
          </div>
          <div className={classes.post__content} dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
