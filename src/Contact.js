import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form, Button } from "react-bootstrap";
import Heading from "./components/Heading";

const emailRegChecker = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const urlChecker = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const schema = yup.object().shape({
	email: yup
		.string()
		.required()
		.matches(emailRegChecker, "The email you entered was not valid"),
	age: yup
		.number("Please enter a valid age")
		.required("Please enter your age")
		.min(10, "Age must be between 10 and 20")
		.max(20, "Age must be between 10 and 20"),
	website: yup
		.string()
		.matches(urlChecker, "The url you entered was not valid")
		.required("Please enter your URL"),
});

export default function Contact() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	return (
		<>
			<Heading title='Contact' />
			<Container>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							ref={register({ required: true })}
							type='email'
							name='email'
							placeholder='e.g: your@email.com'
						/>
						{errors.email && (
							<span className='error'>{errors.email.message}</span>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Age</Form.Label>
						<Form.Control
							ref={register({ required: true })}
							name='age'
							type='number'
							placeholder='Age must be between 10 and 20'
						/>
						{errors.age && <span className='error'>{errors.age.message}</span>}
					</Form.Group>
					<Form.Group>
						<Form.Label>Website</Form.Label>
						<Form.Control
							ref={register({ required: true })}
							name='website'
							type='text'
							placeholder='e.g: your.sitename.com'
						/>
						{errors.website && (
							<span className='error' variant='danger'>
								{errors.website.message}
							</span>
						)}
					</Form.Group>
					<Button type='submit' variant='secondary'>
						SUBMIT
					</Button>
				</Form>
			</Container>
		</>
	);
}
