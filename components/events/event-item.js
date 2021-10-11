import Link from 'next/link';
import classes from './event-item.module.css';

function EventItem (props) {
    console.log(props);
    const { title,image,date,location,id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    console.log(date);
    const formattedAddress = location.replace('/ ',',');
    const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={'/'+image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>
                        {title}
                    </h2>
                    <div>
                        <time>
                            {humanReadableDate}
                        </time>
                    </div>
                    <div>
                        <address>
                            {formattedAddress}
                        </address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}> Explore Event</Link>
                </div>
            </div>
        </li>
    );
}
export default EventItem;