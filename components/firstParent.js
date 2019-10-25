const buttonStyle = {
  color: "white",
  backgroundColor: "green",
  padding: "0.5rem",
  borderRadius: "10px",
  fontSize: "1.5rem"
};

const inputStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  border: "1px solid #E0E0E0",
  boxShadow: "inset 0 1px 2px #FAFAFA",
  maxWidth: "80%",
  fontSize: "1.5rem"
};

export class FirstParent extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="firstName">First Name </label>
          <input
            style={inputStyle}
            id="firstName"
            type="text"
            placeholder="John"
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
            placeholder="Smith"
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
            placeholder="Mom/Dad"
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
            placeholder="4175551234"
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
            placeholder="awesome_parent@gmail.com"
          />
        </div>
        <div style={{ margin: `1rem auto`, textAlign: "center" }}>
          <button style={buttonStyle} type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default FirstParent;
