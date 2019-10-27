import { Fragment } from "react";

const buttonStyle = {
  color: "white",
  backgroundColor: "green",
  padding: "0.5rem",
  borderRadius: "10px",
  fontSize: "2rem",
  width: "200px"
};

const inputStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  border: "1px solid #E0E0E0",
  boxShadow: "inset 0 1px 2px #FAFAFA",
  width: "60%",
  fontSize: "1.5rem",
  lineHeight: "2em"
};

export class PrimaryParent extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <div style={{ textAlign: `center`, marginBottom: `2rem` }}>
          <h2>Register Next Parent</h2>
        </div>
        <form>
          <div>
            <label htmlFor="firstName2">First Name </label>
            <input
              style={inputStyle}
              id="firstName2"
              type="text"
              placeholder=" Jane"
              value={values}
              onChange={handleChange(`firstName2`)}
            />
          </div>
          <div>
            <label htmlFor="lastName2">Last Name </label>
            <input
              style={inputStyle}
              id="lastName2"
              type="text"
              placeholder=" Smith"
              value={values}
              onChange={handleChange("lastName2")}
            />
          </div>
          <div>
            <label htmlFor="parent2">Parent </label>
            <input
              style={inputStyle}
              id="parent2"
              type="text"
              value={values}
              onChange={handleChange("parentType2")}
              placeholder=" Mom/Dad"
            />
          </div>
          <div>
            <label htmlFor="phone2">Phone </label>
            <input
              style={inputStyle}
              id="phone2"
              type="text"
              value={values}
              onChange={handleChange("phone2")}
              placeholder=" 4175551234"
            />
          </div>
          <div>
            <label htmlFor="email2">Email </label>
            <input
              style={inputStyle}
              id="email2"
              type="text"
              value={values}
              onChange={handleChange("email2")}
              placeholder=" awesome_parent2@gmail.com"
            />
          </div>
          <div style={{ margin: `1rem auto`, textAlign: "center" }}>
            <button style={buttonStyle} type="submit" value="previous" onClick={this.previous}>
              Previous
            </button>
            <button style={buttonStyle} type="submit" value="next" onClick={this.continue}>
              Next
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}
export default PrimaryParent;
