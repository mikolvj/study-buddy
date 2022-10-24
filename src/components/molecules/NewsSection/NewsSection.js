import classes from './NewsSection.module.scss';
import Wrapper from '../../atoms/Wrapper/Wrapper';
import AddButton from '../../atoms/AddButton/AddButton';

const data = [
	{
		title: 'New computers in labs',
		category: 'Tech news',
		content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the
        undoubtable source.`,
		image: '',
	},
	{
		title: 'Sport team failed again',
		category: 'Tech news',
		content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Dummy text for more information about goku and other sayians.`,
		image:
			'https://res.cloudinary.com/practicaldev/image/fetch/s--q75pEi4S--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wbakwxzmqa9s4hov0mtf.png',
	},
	{
		title: 'Teachers, leave them kids alone',
		category: 'Tech news',
		content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the
        undoubtable source.`,
		image: '',
	},
];

const NewsSection = () => {
	return (
		<>
			{data.map(({ title, category, content, image = null }) => (
				<Wrapper>
					<div className={classes.articleWrapper} key={title}>
						<h3 className={classes.title}>{title}</h3>
						<p className={classes.category}>{category}</p>
						<div className={classes.contentWrapper}>
							<p className={classes.content}>{content}</p>
							{image ? <img src={image} alt='title' /> : null}
						</div>
						<AddButton btnLabel='More'></AddButton>
					</div>
				</Wrapper>
			))}
		</>
	);
};

export default NewsSection;
