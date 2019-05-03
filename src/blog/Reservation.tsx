import React, {Component, ReactPropTypes} from 'react';

interface State {
    isGoing: boolean;
    numberOfGuests: number;
    notes: string
}

class Reservation extends Component<any, State> {
  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      notes: ''
    };
  }

  handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    } as any);
  };

  submitForm = (e: any) => {
    e.preventDefault();
    if (this.state) {
      console.log(this.state);
    }
  };

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Notes:
          <input
            name="notes"
            type="text"
            value={this.state.notes}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <button
          onClick={this.submitForm}
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        >
          Button
        </button>
      </form>
    );
  }
}

export default Reservation;