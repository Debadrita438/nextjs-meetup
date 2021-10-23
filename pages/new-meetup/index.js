import { useRouter } from 'next/router';
import NewMeetupForm from '../../src/components/Meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
