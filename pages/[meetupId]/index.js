import MeetupDetail from '../../src/components/Meetups/MeetupDetail';

const MeetupDetails = (props) => {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            description={props.meetupData.description}
            address={props.meetupData.address}
        />
    );
};

// Only for dynamic pages
export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    };
};

export const getStaticProps = (context) => {
    // fetch data for single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image:
                    'https://cdn.vox-cdn.com/thumbor/Ksi3v8e1tj1ZcQeRV1ZtmCYIM7k=/0x0:4284x2916/1200x800/filters:focal(1800x1116:2484x1800)/cdn.vox-cdn.com/uploads/chorus_image/image/61918529/NorthBroadSt_Landscape_1_M.Edlow.0.jpg',
                id: meetupId,
                title: 'A First Meetup',
                description: 'This is a first meetup',
                address: 'Some Address 12, Some city, 123456'
            }
        }
    };
};

export default MeetupDetails;
