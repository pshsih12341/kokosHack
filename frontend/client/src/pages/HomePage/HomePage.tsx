import { useAppSelector } from '../../services/store';

import style from './HomePage.module.scss';
import FeedItem from '../../components/FeedItem/feedItem';
import { Pagination } from '@gravity-ui/uikit';
import MatchItem from '../../components/MatchItem/matchItem';

const HomePage = () => {
  //const dispatch = useAppDispatch();
  const feedData = useAppSelector((store) => store.feed.data);
  const lastMatch = useAppSelector((store) => store?.matches?.data[0]);

  //useEffect(() => {
  //dispatch(fetchFeed());
  //}, []);

  return (
    //<div>{feedData && <Text>{feedData}</Text>}</div>
    <div className={style.page}>
      <div className={style.block}>
        <div className={style.matches}>
          <h3 className={style.title}>Ближайший матч</h3>
          <MatchItem match={lastMatch} />
        </div>
        <div className={style.feed}>
          <h3 className={style.title}>Новости</h3>
          <div className={style.feedContainer}>
            {feedData.feeds.map((el) => (
              <FeedItem key={el.title} feed={el} />
            ))}
          </div>
        </div>
        <Pagination
          page={feedData.page}
          pageSize={8}
          onUpdate={() => {
            console.log(123);
          }}
          className={style.Pagination}
        />
      </div>
    </div>
  );
};

export default HomePage;
