import React, { Component } from 'react';
import FormField from './utils/FormFields';
import { validate } from './utils/validate';

class FormFour extends Component {

  state = {
    maxAge: 100,
    loading: false,
    formData: {
      name: { //key nd element,value,config is value
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your lastname'
        },
        validation: {
          required: true
        },
        //value add kari hase to valid nd touched true thase nd 
        //after submit validationmessage show thase
        valid: false,
        touched: false,
        validationMessage: ''
      },
      age: {
        element: 'select',
        value: '',
        config: {
          name: 'age_input',
        },
        validation: {
          required: true,
          minNum: 20  // minimum 20 age validation true otherwise not valid 
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      message: {
        element: 'textarea',
        value: '',
        config: {
          name: 'message_input',
          rows: 3,
          placeholder: 'Enter your message...'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }

  updateForm = (element) => {
    const newFormData = { ...this.state.formData }
    const newElement = { ...newFormData[element.id] }

    newElement.value = element.event.target.value;

    //validation 
    let validateData = validate(newElement);
    newElement.valid = validateData[0];
    newElement.validationMessage = validateData[1];

    //blur
    if (element.blur) {
      newElement.touched = element.blur
    }
    // console.log(element) 
    newFormData[element.id] = newElement;
    this.setState({
      formData: newFormData
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    // console.log(event)  
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }
    if (formIsValid) {
      // alert('Cool,the form is valid!')
      this.setState({ loading: true });
      for (let key in this.state.formData) {
        dataToSubmit[key] = this.state.formData[key].value
      }
      // console.log('SUBMIT FORM WITH',dataToSubmit)   //submit data show 
      setTimeout(() => {
        this.setState({ loading: false });
        this.onSuccess();
      }, 1000);
    } else {
      alert('Sorry,the form is not valid!')
    }
  }
  // 
  onSuccess = () => {
    let forDataCopy = {
      ...this.state.formData
    }
    for (let key in this.state.formData) {
      // forDataCopy[key] = this.state.formData[key].value
      forDataCopy[key].value = '';
      forDataCopy[key].valid = false;  //data valid hase to delete thase 
      forDataCopy[key].touched = false;
      forDataCopy[key].validationMessage = '';
      //submit click nd than data delete
    }
    this.setState({ formData: forDataCopy });
    alert('THANK YOU WE WILL CONTACT YOU LATER...OR NOT')
  }

  // age select js logic
  generateOptions = () => {
    const ageArray = [];
    for (let i = 1; i < this.state.maxAge; i++) {
      ageArray.push(i)
    }
    return ageArray.map((value, i) => (
      <option key={i} value={value}>{value}</option>
    ))
  }


  render() {
    // console.log(this.state.formData.name)
    return (
      <>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Name</label>
              <FormField
                formData={this.state.formData.name}
                change={(element) => this.updateForm(element)}
                id="name"
              /> <br />

              <div className="form-group">
                <label>LastName</label>
                <FormField
                  formData={this.state.formData.lastname}
                  change={(element) => this.updateForm(element)}
                  id="lastname"
                />
                <br />

                <div className="form-group">
                  <label>Age</label>
                  <FormField
                    formData={this.state.formData.age}
                    change={(element) => this.updateForm(element)}
                    id="age"
                  >
                    <option value="">Select Age</option>
                    {this.generateOptions()}
                  </FormField>
                  <br />

                  <div className="form-group">
                    <label>Message</label>
                    <FormField
                      formData={this.state.formData.message}
                      change={(element) => this.updateForm(element)}
                      id="message"
                    />
                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(event) => this.submitForm(event)}
                      disabled={this.state.loading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default FormFour;