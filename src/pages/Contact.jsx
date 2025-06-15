import { useState } from "react";

const Contact = () => {
  return (
    <>
      <div>
        <SimpleForm />
      </div>
    </>
  );
};

const SimpleForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // The field will be empty after click
    setFirstName("");
    setLastName("");
    setPassword("");
    setCountry("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col m-24 text-2xl">
        <label htmlFor="">Firstname</label>
        <input
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your firstname"
          className="border p-2 mt-2"
        />
        <label htmlFor="">Lastname</label>
        <input
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your lastname"
          className="border p-2 mt-2"
        />
        <label htmlFor="">Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-2 mt-2"
        >
          <option value="">Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
        </select>
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="border p-2 mt-2"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white p-4 mt-6 cursor-pointer inline"
        >
          Submit
        </button>
      </form>

      <p className="m-8 text-2xl">
        <strong>Firstname:</strong> {firstname} <br />
        <strong>Lastname:</strong> {lastname} <br />
        <strong>Country:</strong> {country} <br />
        <strong>Password:</strong> {password} <br />
      </p>
    </>
  );
};

export default Contact;
