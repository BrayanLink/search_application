import {NO_RESULTS_WERE_FOUND} from '../tokens/tokensApp';

const WithoutResults: React.FC = (): JSX.Element => {
  return (
    <div className="home_container">
      <h1>{NO_RESULTS_WERE_FOUND}</h1>
    </div>
  );
};

export default WithoutResults;
