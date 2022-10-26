import classes from './SearchBar.module.scss';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useStudents } from '../../../hooks/useStudents';

const SearchBar = () => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [matchingStudents, setMatchingStudents] = useState('');
	const { findStudents } = useStudents();

	const getMatchingStudents = debounce(async (e) => {
		const { students } = await findStudents(searchPhrase);
		setMatchingStudents(students);
	}, 500);

	useEffect(() => {
		if (!searchPhrase) return;
		getMatchingStudents(searchPhrase);
	}, [searchPhrase, getMatchingStudents]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.status}>
				<h4>Logged as:</h4>
				<h3>Teacher</h3>
			</div>
			<div className={classes.searchWrapper}>
			<input
				className={classes.searchInput}
				placeholder='Search'
				onChange={(e) => setSearchPhrase(e.target.value)}
				value={searchPhrase}
				name='Search'
			></input>
			{searchPhrase && matchingStudents.length ? (
				<ul className={classes.searchList}>
					{matchingStudents.map((student) => (
						<li className={classes.searchItem}key={student.id}>{student.name}</li>
					))}
				</ul>
			) : null}</div>
		</div>
	);
};

export default SearchBar;
