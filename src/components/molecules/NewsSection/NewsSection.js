import React, { useState, useEffect } from 'react';
import classes from './NewsSection.module.scss';
import Wrapper from '../../atoms/Wrapper/Wrapper';
import AddButton from '../../atoms/AddButton/AddButton';
import axios from 'axios';

const NewsSection = () => {
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.post(
				process.env.REACT_APP_API_URL,
				{
					query: `{allArticles
                {title
                  category
                  content
                  image{
                    url
                  }
              }}`,
				},
				{
					headers: {
						authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => setArticles(data.allArticles))
			.then((data) => console.log(data))
			.catch((err) =>
				setError('An API error occured. Please contact the support.')
			);
	}, []);

	return (
		<>
			{articles.length > 0 ? (
				articles.map(({ title, category, content, image }) => (
					<Wrapper>
						<div className={classes.articleWrapper} key={title}>
							<h3 className={classes.title}>{title}</h3>
							<p className={classes.category}>{category}</p>
							<div className={classes.contentWrapper}>
								<p className={classes.content}>{content}</p>
								{image ? <img src={image.url} alt='title' /> : null}
							</div>
							<AddButton btnLabel='More'></AddButton>
						</div>
					</Wrapper>
				))
			) : (
				<Wrapper>{error ? error : 'Loading...'}</Wrapper>
			)}
		</>
	);
};

export default NewsSection;
