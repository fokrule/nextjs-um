import { Fragment } from 'react';
import {useRouter} from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
function AllEventsPage(props) {
  const router = useRouter();
  const events = getAllEvents();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}
export default AllEventsPage;