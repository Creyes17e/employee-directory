import React from "react";
import Moment from "react-moment";

function SearchResults(props) {
  return (
    <table>
      <thead>
        <tr className="text-center">
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {props.results.map((result) => (
          <tr className="table" key={result.login.uuid}>
            <td>
              <img
                className=""
                src={result.picture.thumbnail}
                alt="employee-selfie"
              />
            </td>
            <td>{result.name.first + " " + result.name.last}</td>
            <td>{result.cell}</td>
            <td>{result.email}</td>
            <td>
              <Moment format="MM/DD/YYYY">{result.dob.date}</Moment>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default SearchResults;
