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
          <h2>Register Child</h2>
        </div>
        <form>
          <div>
            <label htmlFor="childFirst">First Name </label>
            <input
              style={inputStyle}
              id="childFirst"
              type="text"
              placeholder=" Timmy"
              value={values}
              onChange={handleChange(`childFirst`)}
            />
          </div>
          <div>
            <label htmlFor="childLast">Last Name </label>
            <input
              style={inputStyle}
              id="childLast"
              type="text"
              placeholder=" Smith"
              value={values}
              onChange={handleChange("childLast")}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender </label>
            <input
              style={inputStyle}
              id="gender"
              type="text"
              value={values}
              onChange={handleChange("childGener")}
              placeholder=" Male/Female"
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth </label>
            <input
              style={inputStyle}
              id="dob"
              type="text"
              value={values}
              onChange={handleChange("dob")}
              placeholder=" 10/1/2010"
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
