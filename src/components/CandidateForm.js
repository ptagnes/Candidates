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
      console.log('Data submitted: ')
      console.log(this.state)
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
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Ålder"
            className="text-input"
            value={this.state.age}
            onChange={this.onAgeChange}
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
            placeholder="Aktuellt rekryteringssteg"
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
