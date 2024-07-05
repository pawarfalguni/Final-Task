import React, { useState } from "react";
import axios from "axios";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [postResponse, setPostResponse] = useState(null);
  const [putResponse, setPutResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"; // replace with your POST API endpoint

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPostResponse(response.data);
      console.log("Resource created:", response.data);
    } catch (error) {
      console.error("Failed to create resource:", error);
    }
  };

  const handlePut = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1"; // replace with your PUT API endpoint

    try {
      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPutResponse(response.data);
      console.log("Resource updated:", response.data);
    } catch (error) {
      console.error("Failed to update resource:", error);
    }
  };

  return (
    <div className="main">
      <h1>Final Task with API PUT / POST METHOD</h1> <hr />
      <div id="formm">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Form</h1>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handlePost}>
            Post Data
          </button>
          <button type="button" onClick={handlePut}>
            Update Data
          </button>
        </form>
        <div>
          {(postResponse || putResponse) && (
            <div>
              <h3 className="alldata">All Data:</h3>
              <table border="1" id="mytable">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {postResponse && (
                    <tr>
                      <td>
                        <strong>Post Data</strong>
                      </td>
                      <td>{postResponse.name}</td>
                      <td>{postResponse.email}</td>
                    </tr>
                  )}
                  {putResponse && (
                    <tr>
                      <td>
                        <strong>Updated Data</strong>
                      </td>
                      <td>{putResponse.name}</td>
                      <td>{putResponse.email}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
