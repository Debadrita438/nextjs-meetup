import { useState } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
    const [ title, setTitle ] = useState('');
    const [ image, setImage ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ description, setDescription ] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const meetupData = {
            title,
            image,
            address,
            description
        };

        props.onAddMeetup(meetupData);

        setTitle('');
        setImage('');
        setAddress('');
        setDescription('');
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input
                        type='text'
                        required
                        id='title'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input
                        type='url'
                        required
                        id='image'
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        required
                        id='address'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
