import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import { Fragment } from 'react';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
function FilteredEventsPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    if ( !filteredData ) {
        return <p className="center">
            Loading
        </p>
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1]

    const numYear = +filteredYear; // converted to number by adding +
    const numMonth = +filteredMonth; // converted to number by adding +

    if ( 
        isNaN(numYear) || 
        isNaN(numMonth) || 
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth > 12 ||
        numMonth < 1
        ) {
        return <Fragment>
            <ErrorAlert>
                Invalid Data
            </ErrorAlert>
            <Button link="/events" className="center">
                Show ALl
            </Button>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({
        year : numYear,
        month : numMonth
    });

    if ( !filteredEvents || filteredEvents.length === 0 ) {
        return <Fragment>
            <ErrorAlert>
                No Events found
            </ErrorAlert>
            <Button link="/events" className="center">
                Show ALl
            </Button>
        </Fragment>
        
    }
    const date = new Date(numYear, numMonth -1 );
    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    );
}
export default FilteredEventsPage;