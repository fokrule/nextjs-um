import EventItem from '../components/events/event-item';
import { getFeaturedEvents } from '../dummy-data';
function HomePage() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <EventItem items={featuredEvents}/>
        </div>
    );
}
export default HomePage;