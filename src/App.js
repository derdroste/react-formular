import React, {Component} from "react";
import { connect } from "react-redux";

import Input from './components/input';
import Button from './components/button';
import TextArea from './components/textArea';
import {store} from "./redux/store";
import {saveState} from "./persist-state/persistedState";

 class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [
        {
          type: 'text',
          name: 'Last Name',
          handler: 'lastName'
        },
        {
          type: 'text',
          name: 'First Name',
          handler: 'firstName'
        },
        {
          type: 'text',
          name: 'Nick Name',
          handler: 'nickName'
        },
        {
          type: 'email',
          name: 'Email',
          handler: 'email'
        },
        {
          type: 'password',
          name: 'Password',
          handler: 'password'
        },
        {
          type: 'password',
          name: 'Repeat Password',
          handler: 'repeatedPassword'
        },
        {
          type: 'checkbox',
          name: 'Show Address',
          handler: 'showAddress'
        }
      ],
      inputFieldsAdress: [
        {
          type: 'text',
          name: 'Street',
          handler: 'street'
        },
        {
          type: 'text',
          name: 'House/Apartment',
          handler: 'house'
        },
        {
          type: 'number',
          name: 'ZIP',
          handler: 'zip'
        },
        {
          type: 'text',
          name: 'City',
          handler: 'city'
        }
      ]
    }
  }
  computedShowAddress() {
     return store.getState().signUp.showAddress
  }
  render() {
    store.subscribe(() => {
      this.computedShowAddress()
    });
    return (
       <form>
         {this.state.inputFields.map((field, index) => {
           return <Input key={index}
                         inputType={field.type}
                         name={field.name}
                         handler={field.handler}
                         componentIndex={index}
           />;})}
           <div style={{ display: this.computedShowAddress() === true ? "block" : "none" }}>
             {this.state.inputFieldsAdress.map((field, index) => {
               return <Input key={index}
                             inputType={field.type}
                             name={field.name}
                             handler={field.handler}
                             componentIndex={index}
               />;})}
           </div>


         <TextArea
             name={'Additional Information'}
             id={'additionalInfo'}
         />
         <Button type={'submit'} name={'Submit'} />
       </form>
    );
  }
}

const mapDispatch = (dispatch) => ({});
const mapState = (state) => ({});

export default connect(mapState, mapDispatch)(Page);

