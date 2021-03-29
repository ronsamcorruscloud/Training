import * as React from 'react';
import styles from './Events.module.scss';
import { IEventsProps } from './IEventsProps';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ListEvents from './ListEvents';
import EventsForm from './EventsForm';

export default class Events extends React.Component<IEventsProps, {}> {
  public render(): React.ReactElement<IEventsProps> {
    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (<ListEvents {...this.props} />)}
          />
          <Route
            path="/newevent"
            render={() => (<EventsForm {...this.props} />)}
          />
          {/* <Route path="/meetingForm/:id" exact render={() => <NewMeeting {...this.props} />} />
          <Route render={() => (<ListAllMeetings {...this.props} />)} /> */}
        </Switch>
      </HashRouter>
    );
  }
}
