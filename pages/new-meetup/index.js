import NewMeetupForm from '../../src/components/Meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    };

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
