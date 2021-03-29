import * as React from 'react';
import styles from './ListEvents.module.scss';
import { NavLink } from 'react-router-dom';
import { PrimaryButton } from 'office-ui-fabric-react';
import { withRouter } from 'react-router-dom';

class ListEvents extends React.Component<any, {}> {
    public render(): React.ReactElement<any> {
        return (
            <div className={styles.listevents}>
                <div className={styles.header}>
                    <h2>Events</h2>
                    <PrimaryButton text="Add Event" onClick={() => this.props.history.push('/newevent')} />
                </div>
            </div>
        )
    }
}

export default withRouter(ListEvents);