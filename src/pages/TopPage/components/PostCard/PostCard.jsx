import { Link } from "react-router-dom";
import classes from "./PostCard.module.css";

const PostCard = ({ post }) => {
  // 日付を取得する関数
  const formatDate = (isoString, separator) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}${separator}${month}${separator}${day}`;
  };

  // 記事の本文を抜粋する関数
  const getPreviewContent = (html, maxLines = 2) => {
    const lines = html.split('<br/>');
    const previewLines = lines.slice(0, maxLines);
    if (previewLines.length === maxLines) {
      previewLines[maxLines - 1] += '...';
    }
    return previewLines.join('<br/>');
  };

  return (
    <>
      <Link to={`/post/${post.id}`}>
        <div className={classes.post_card} href='#'>
          <div className={classes.post_card__header}>
            <div className={classes.post_card__date}>
              <time dateTime={formatDate(post.createdAt, '-')}>
                {formatDate(post.createdAt, '/')}
              </time>
            </div>
            <div className={classes.post_card__categories}>
              {post.categories.map((category) => (
                <p>{category}</p>
              ))}
            </div>
          </div>
          <div className={classes.post_card__title}>
            <p>{post.title}</p>
          </div>
          <div className={classes.post_card__content}>
            <p dangerouslySetInnerHTML={{ __html: getPreviewContent(post.content) }} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
