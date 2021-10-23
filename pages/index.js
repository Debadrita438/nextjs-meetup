import { MongoClient } from 'mongodb';
import MeetupList from '../src/components/Meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image:
            'https://cdn.vox-cdn.com/thumbor/Ksi3v8e1tj1ZcQeRV1ZtmCYIM7k=/0x0:4284x2916/1200x800/filters:focal(1800x1116:2484x1800)/cdn.vox-cdn.com/uploads/chorus_image/image/61918529/NorthBroadSt_Landscape_1_M.Edlow.0.jpg',
        address: 'Some Address 12, Some city, 123456',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image:
            'https://cdn.vox-cdn.com/thumbor/Ksi3v8e1tj1ZcQeRV1ZtmCYIM7k=/0x0:4284x2916/1200x800/filters:focal(1800x1116:2484x1800)/cdn.vox-cdn.com/uploads/chorus_image/image/61918529/NorthBroadSt_Landscape_1_M.Edlow.0.jpg',
        address: 'Some Address 1, Some city, 123456',
        description: 'This is a second meetup'
    }
];

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
    // fetch data from api
    const client = await MongoClient.connect(
        'mongodb+srv://Debadrita:y9gUCasgRN9PZxRx@cluster0.gx0g2.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10 // to regenerate page to show the new contents
    };
};

export default HomePage;
