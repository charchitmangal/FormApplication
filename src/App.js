import { useState } from "react";
import "./App.css";

function App() {

  const[formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name]:type=="checkbox" ? checked: value}));
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally Printing the value of form Data:");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label> <br></br>
        <input type="text" name="firstName" id="firstName"
        placeholder="Love"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"></input>
        <br></br>
        <label htmlFor="lastName">Last Name</label> <br></br>
        <input type="text" name="lastName" id="lastName"
        placeholder="Love"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"></input>
        <br></br>
        <label htmlFor="email">E-Mail</label> <br></br>
        <input type="text" name="email" id="email"
        placeholder="mail@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline"></input>

        <br></br>
        <label htmlFor="country">Country</label> <br></br>

        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>US</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br></br>
        <label htmlFor="streetAddress">E-Mail</label> <br></br>
        <input type="text" name="streetAddress" id="streetAddress"
        placeholder="Address"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"></input>

        <br></br>
        <label htmlFor="city">City</label> <br></br>
        <input type="text" name="city" id="city"
        placeholder="city"
        value={formData.city}
        onChange={changeHandler}
        className="outline"></input>

        <br></br>
        <label htmlFor="state">State</label> <br></br>
        <input type="text" name="state" id="state"
        placeholder="state"
        value={formData.state}
        onChange={changeHandler}
        className="outline"></input>

        <br></br>
        <label htmlFor="postalCode">State</label> <br></br>
        <input type="text" name="postalCode" id="postalCode"
        placeholder="postalCode"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"></input>

        <fieldset>
          <legend>By Email</legend>
          
          <div className="flex">
            <input 
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              >
            </input>
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get Notified when someone posts a comment on a posting</p>
            </div>
          </div>
          
          <div className="flex">
            <input 
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              >
            </input>
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get Notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input 
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              >
            </input>
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get Notified when someone posts a comment on a posting</p>
            </div>
          </div>
        </fieldset>
        <br/>
        <br/>
        <fieldset>
          <legend>Push Notifcation</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input 
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>
          <br/>
          <input 
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Same as email</label>
          <br/>
          <input 
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notification"
            onChange={changeHandler}
          />

          <label htmlFor="pushNothing">Push Notification</label>

        </fieldset>

        <br/>
        <button className="bg-blue-500 rounded-sm text-white py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
