import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState(
    {
      firstName: "", lastName: "", email: "",
      country: "India", streetAddress: "", city: "",
      state: "", postalCode: "", comments: false, candidates: false,
      offers: false, pushNotification: ""
    }
  );

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    })
    );
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label><br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="vaibhav"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br /><br />

        <label htmlFor="lastName">Last Name</label><br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Narwade"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br /><br />

        <label htmlFor="email">Email</label><br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="abc@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br /><br />

        <label htmlFor="country" className="mr-4">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          className="outline"
        >

          <option>India</option>
          <option>USA</option>
          <option>Canda</option>
          <option>Japan</option>
          <option>Germeny</option>
        </select>

        <br /><br />

        <label htmlFor="streetAddress">Street Address</label><br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Loni kalbhor"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />


        <br /><br />

        <label htmlFor="city">City</label><br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Pune"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />


        <br /><br />

        <label htmlFor="state">State</label><br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />


        <br /><br />

        <label htmlFor="postalCode">Postal Code</label><br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="245166"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />

        <br /><br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />

            <div className="ml-2">
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comments on a posting.</p>
            </div>
          </div>
          <br />

          <div className="flex">
            <input type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />

            <div className="ml-2">
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <br />


          <div className="flex">
            <input type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />

            <div className="ml-2">
              <label htmlFor="offers">Offers</label>
              <p>Get notified when someone posts a comments on a posting</p>
            </div>
          </div>

        </fieldset>
        <br/>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <div className="flex mt-3 cursor-pointer">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />

            <label htmlFor="pushEverything">Everything</label>
          </div>
          

          <div className="flex mt-3 cursor-pointer">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />

            <label htmlFor="pushEverything">Send as email</label>
          </div>
          
          <div className="flex mt-3 cursor-pointer">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="No Push Notification"
              onChange={changeHandler}
              className="mr-2"
            />

            <label htmlFor="pushEverything">No push Notification</label>
          </div>
          <br/>

        </fieldset>
        <br/>
        <br/>

        <button className=" bg-blue-500 text-white 
        font-bold rounded py-2 px-4"

        >Save</button>

        <br/>
        <br/>



      </form>
    </div>
  );
}

export default App;
