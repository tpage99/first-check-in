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

const helpText = {
  fontSize: "1rem",
  fontStyle: "italic",
  marginTop: 0
};

export class PrimaryParent extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <div style={{ textAlign: `center`, marginBottom: `2rem` }}>
          <h2 style={{ marginBottom: 0 }}>Register Primary Parent</h2>
          <p style={helpText}>*Primary parent is the first contact for the household.</p>
        </div>
        <form>
          <div>
            <label htmlFor="firstName">First Name </label>
            <input
              style={inputStyle}
              id="firstName"
              type="text"
              placeholder=" John"
              value={values}
              onChange={handleChange(`firstName`)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name </label>
            <input
              style={inputStyle}
              id="lastName"
              type="text"
              placeholder=" Smith"
              value={values}
              onChange={handleChange("lastName")}
            />
          </div>
          <div>
            <label htmlFor="parent">Parent </label>
            <input
              style={inputStyle}
              id="parent"
              type="text"
              value={values}
              onChange={handleChange("parentType")}
              placeholder=" Mom/Dad"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone </label>
            <input
              style={inputStyle}
              id="phone"
              type="text"
              value={values}
              onChange={handleChange("phone")}
              placeholder=" 4175551234"
            />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input
              style={inputStyle}
              id="email"
              type="text"
              value={values}
              onChange={handleChange("email")}
              placeholder=" awesome_parent@gmail.com"
            />
          </div>
          <div style={{ margin: `1rem auto`, textAlign: "center" }}>
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
