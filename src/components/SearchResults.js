import React from "react";

function SearchResults(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => (
          <tr className="table" key={result.login.uuid}>
            <td>
              <img
                className=""
                src={result.picture.thumbnail}
                alt="employee-selfie"
              />
            </td>
            <td>{result.name.first + "" + result.name.last}</td>;
            <td>{result.cell}</td>
            <td>{result.email}</td>
            <td>{result.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default SearchResults;
