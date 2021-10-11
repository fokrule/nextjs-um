import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';
function HomePage() {
    const featuredEvents = getFeaturedEvents();
    console.log(featuredEvents)
    return (
        <div>
            <EventList items={featuredEvents}/>
        </div>
    );
}
export default HomePage;