import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';

import classes from './TopPage.module.css';

const TopPage = ({ posts }) => {
  return (
    <>
      <Header />
      <div className={classes.post}>
        <div className='inner'>
          <ul className={classes.post__cards}>
            {posts.map(post => (
              <PostCard post={post} key={post.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopPage;
