import React, { Component } from 'react'

class FormFour extends Component {
    state = {
      loading:false,
      formData:{
        name:{
          element:'input',
          value:'',
          config:{
            name:'name_input',
            type:'text',
            placeholder:'Enter your name'
          },
          validation:{
            required:true
          },
          valid:false,
          touched:false,
          validationMessage:''
        }
      }
    }
  render() {
    return (
      <>
        Form four custom
      </>
    )
  }
}

export default FormFour;
