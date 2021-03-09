import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

// Search function is WIP, not currently working

export default function Search(props) {
	const [search, setSearch] = useState("");

	const handleInput = (e) => {
		const text = e.target.value;
		setSearch(text);
	};

	return (
		<Form inline className='search'>
			<FormControl
				type='text'
				placeholder='Search..'
				value={search}
				className='mx-auto mb-4'
				onChange={handleInput}
			/>
		</Form>
	);
}
