import classes from './SearchBar.module.scss';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useStudents } from '../../../hooks/useStudents';
import { useCombobox } from 'downshift';

const SearchBar = () => {
	const [matchingStudents, setMatchingStudents] = useState([]);
	const { findStudents } = useStudents();

	const getMatchingStudents = debounce(async ({ inputValue }) => {
		const { students } = await findStudents(inputValue);
		setMatchingStudents(students);
	}, 500);

	// Downshift hook
	const {
		isOpen,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox({
		items: matchingStudents,
		onInputValueChange: getMatchingStudents,
	});

	return (
		<div className={classes.wrapper}>
			<div className={classes.status}>
				<h4>Logged as:</h4>
				<h3>Teacher</h3>
			</div>
			<div {...getComboboxProps} className={classes.searchWrapper}>
				<input
					className={classes.searchInput}
					placeholder='Search'
					{...getInputProps()}
					name='Search'
					id='Search'
				></input>
				<ul className={classes.searchList} {...getMenuProps()}>
					{isOpen &&
						matchingStudents.map((item, index) => (
							<li
								{...getItemProps({ item, index })}
								key={item.id}
								className={
									highlightedIndex === index
										? `${classes.high} + ${classes.searchItem}`
										: classes.searchItem
								}
							>
								{item.name}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default SearchBar;
