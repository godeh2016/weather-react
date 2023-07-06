import React from "react";
import "./Weather.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <br />
              <div className="weather-app">
                <form>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-3">
                      <input
                        type="search"
                        className="form-control shadow-sm"
                        placeholder="Enter a city"
                      />
                    </div>
                    <div className="col-1">
                      <input
                        type="submit"
                        className="btn btn-primary shadow-sm"
                        value="Search"
                      />
                    </div>
                    <div className="col-1">
                      <input
                        type="button"
                        className="btn btn-success shadow-sm"
                        value="Current"
                      />
                    </div>
                  </div>
                </form>
                <br />
                <br />

                <h1>Munich</h1>
                <h6>January 1, 2023</h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
