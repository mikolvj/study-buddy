import classes from './News.module.scss';
import NewsSection from '../../molecules/NewsSection/NewsSection';

const News = () => {
	return (
		<div className={classes.newsWrapper}>
			<h2>Newsfeed</h2>
			<NewsSection></NewsSection>
		</div>
	);
};

export default News;
