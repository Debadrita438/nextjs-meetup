import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import MeetupDetail from '../../src/components/Meetups/MeetupDetail';

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups | {props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                description={props.meetupData.description}
                address={props.meetupData.address}
            />
        </Fragment>
    );
};

// Only for dynamic pages
export const getStaticPaths = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://Debadrita:y9gUCasgRN9PZxRx@cluster0.gx0g2.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } }))
    };
};

export const getStaticProps = async (context) => {
    // fetch data for single meetup
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://Debadrita:y9gUCasgRN9PZxRx@cluster0.gx0g2.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    };
};

export default MeetupDetails;
