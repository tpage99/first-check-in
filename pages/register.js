import Layout from "../components/MyLayout";
import PrimaryParent from "../components/primaryParent";
import SecondParent from "../components/secondParent";
import Child from "../components/child";

export class Start extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    parentType: "",
    phone: "",
    email: "",
    firstName2: "",
    lastName2: "",
    parentType2: "",
    phone2: "",
    email2: "",
    childFirst: "",
    childLast: "",
    childGender: "",
    dob: ""
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

    const {
      firstName,
      lastName,
      parentType,
      phone,
      email,
      firstName2,
      lastName2,
      parentType2,
      phone2,
      email2,
      childFirst,
      childLast,
      childGender,
      dob
    } = this.state;

    const values = {
      firstName,
      lastName,
      parentType,
      phone,
      email,
      firstName2,
      lastName2,
      parentType2,
      phone2,
      email2,
      childFirst,
      childLast,
      childGender,
      dob
    };

    switch (step) {
      case 1:
        return (
          <Layout>
            <PrimaryParent nextStep={this.nextStep} handleChange={this.handleChange} values={this.values} />
          </Layout>
        );
      case 2:
        return (
          <Layout>
            <SecondParent
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={this.values}
            />
          </Layout>
        );
      case 3:
        return (
          <Layout>
            <Child
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={this.values}
            />
          </Layout>
        );
    }
  }
}

export default Start;
