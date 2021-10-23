import { useEffect, useState } from 'react';
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

const HomePage = () => {
    const [ loadedMeetups, setLoadedMeetups ] = useState([]);

    useEffect(() => {
        // Fetching data

        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
