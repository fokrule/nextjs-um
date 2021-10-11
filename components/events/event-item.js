import Button from '../ui/button';
import classes from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRigntIcon from '../icons/arrow-right-icon';
function EventItem (props) {
    console.log(props);
    const { title,image,date,location,id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
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
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>
                            {humanReadableDate}
                        </time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>
                            {formattedAddress}
                        </address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>    
                        <span>
                            <ArrowRigntIcon />
                        </span>
                        </Button>
                </div>
            </div>
        </li>
    );
}
export default EventItem;