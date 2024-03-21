import {Link} from 'react-router-dom';
import IconNotFound from '../components/svg/IconNotFound';
import {ERROR_MESSAGE_404, REDIRECT_TO_HOME_MESSAGE} from '../tokens/tokensApp';

const NotFound = () => {
  return (
    <section className="home_container">
      <div>
        <IconNotFound />
      </div>
      <h1>{ERROR_MESSAGE_404}</h1>
      <Link to={`/`}>
        <h2>{REDIRECT_TO_HOME_MESSAGE}</h2>
      </Link>
    </section>
  );
};

export default NotFound;
