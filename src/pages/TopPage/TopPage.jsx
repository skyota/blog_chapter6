import PostCard from './components/PostCard/PostCard';

import classes from './TopPage.module.css';

const TopPage = ({ posts }) => {
  return (
    <>
      <div className={classes.post}>
        <div className='inner'>
          <ul className={classes.post__cards}>
            {posts.map(post => (
              <li className={classes.post__card}>
                <PostCard post={post} key={post.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopPage;
