import axios from "axios";
import React, { Component } from "react";

import { Link } from "react-router-dom";

class AddMeetup extends Component {

    addMeetup(newMeetup){
        axios.request({
            method:'post',
            url:"http://localhost:3000/api/meetups",
            data: newMeetup
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

  onSubmit(e) {
    e.preventDefault();
   console.log(e);
    const newMeetup = {
      name:  this.refs.name.value,
      city:  this.refs.city.value,
      address:  this.refs.address.value,
    };
    this.addMeetup(newMeetup);
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>ADD MEETUP</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddMeetup;
