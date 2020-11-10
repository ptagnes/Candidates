import React from 'react';

export default class CandidateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.candidate ? props.candidate.description : '',
      note: props.candidate ? props.candidate.note : '',
      age: props.candidate ? props.candidate.age : '',
      email: props.candidate ? props.candidate.email : '',
      address: props.candidate ? props.candidate.address : '',
      status: props.candidate ? props.candidate.status: '',
      calendarFocused: false,
      error: ''
    };
  }
  handleOnChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAgeChange = (e) => {
    const age = e.target.value;
    this.setState(() => ({ age }));
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
   onStatusChange = (e) => {
    const status = e.target.value;
    this.setState(() => ({ status }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Vänligen ange ett namn.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        age: this.state.age,
        email: this.state.email,
        address: this.state.address,
        status: this.state.status
      });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && (
            <p className="form__error">{this.state.error}</p>
          )}
          <input
            type="text"
            placeholder="Namn"
            className="text-input"
            name="description"
            autoFocus
            value={this.state.description}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            placeholder="Ålder"
            className="text-input"
            name="age"
            value={this.state.age}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            placeholder="Epost"
            className="text-input"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            type="text"
            placeholder="Adress"
            className="text-input"
            value={this.state.address}
            onChange={this.onAddressChange}
          /> 
          <input
            type="text"
            placeholder="Aktuellt rekryteringssteg, fas1: intervju, fas2: teknik, fas3: erbjudande"
            className="text-input"
            value={this.state.status}
            onChange={this.onStatusChange}
          /> 
          <textarea
            placeholder="Add a note for the candidate (optional)"
            value={this.state.note}
            className="textarea"
            onChange={this.onNoteChange}
          ></textarea>
          <button className="button">Lägg till</button>
        </form>
      </div>
    );
  }
}
