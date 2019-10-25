import Layout from "../components/MyLayout";
import FirstParent from "../components/firstParent";

export class Start extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    parentType: "",
    phone: "",
    email: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, parentType, phone, email } = this.state;
    const values = { firstName, lastName, parentType, phone, email };

    switch (step) {
      case 1:
        return (
          <Layout>
            <FirstParent nextStep={this.nextStep} handleChange={this.handleChange} values={this.values} />
          </Layout>
        );
    }
  }
}

export default Start;
