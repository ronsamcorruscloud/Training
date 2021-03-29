import * as React from 'react';
import styles from './EventsForm.module.scss';
import { DatePickerBasicExample as DatePicker } from '../../util/DatePicker';
import { PrimaryButton } from 'office-ui-fabric-react';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { withRouter } from 'react-router-dom';
import { addEvent } from '../../requests';

interface IEventsForm {
    title: string,
    description: string,
    date: Date
}


const narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };

export default class EventsForm extends React.Component<{}, IEventsForm> {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            date: null
        }
    }

    public changeHandler = (ev: React.FormEvent<HTMLInputElement>, newValue?: string): void => {
        const newState = {};
        newState[ev.target['name']] = newValue;
        this.setState(newState);
    }
    public dateHandler = (date: Date | null | undefined) => {
        this.setState({date: date})
    }

    public submitHandler = (): void => {
        addEvent(this.state)
        .then(resp=>{
            console.log(resp)
        })
    }

    public render(): React.ReactElement<{}> {
        return (
            <div className={styles.eventsform}>
                <div className={styles.header}>
                    <h2>New Events</h2>
                </div>
                <div className={styles.formBody}>
                    <TextField 
                        label="Title" 
                        placeholder="Please enter title here" 
                        styles={narrowTextFieldStyles} 
                        value={this.state.title} 
                        name="title" 
                        onChange={this.changeHandler}
                    />
                    <TextField 
                        label="Description" 
                        placeholder="Please enter desciption here" 
                        styles={narrowTextFieldStyles} 
                        value={this.state.description} 
                        name="description" 
                        onChange={this.changeHandler} 
                    />
                    <DatePicker dateHandler={this.dateHandler}/>
                    <PrimaryButton text="Submit" width="300" onClick={ this.submitHandler }/>
                </div>
            </div>
        )
    }
}

// export default withRouter(EventsForm)