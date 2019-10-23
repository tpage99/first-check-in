import Layout from "../components/MyLayout";

const buttonStyle = {
  color: "white",
  backgroundColor: "green",
  padding: "0.5rem",
  borderRadius: "10px",
  fontSize: "1.5rem"
};

const inputStyle = {
  padding: "0.5rem 0",
  width: "85%",
  maxWidth: "60%",
  margin: "0 auto"
};

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              style={inputStyle}
              id="firstName"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input style={inputStyle} id="lastName" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="parent">Parent</label>
            <input style={inputStyle} id="parent" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div>
            <button style={buttonStyle} type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}

export default FirstForm;
