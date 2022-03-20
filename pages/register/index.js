import { Field, reduxForm } from 'redux-form';
import { signUp } from '../../redux-src/actions/'
import { connect } from 'react-redux'
import axios from 'axios';

export const Register = (props) => {

  const checkEmailExistence = (serverUser, formData)=>{
    const user = serverUser.find(user=> user.email === formData.email);
    if(user) return user;
  }
  const  renderError =({ error, touched })=> {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }
  const renderInput = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
          <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="new-password" type={type} required autoSave='off' />
            {renderError(meta)}
          </div>
        );
      };
     const onSubmit = async (formValues)=> {
       const user = await axios.get("http://localhost:3001/users").then((res)=> checkEmailExistence(res.data, formValues));
       if(user){
         console.log('user already exist');
       }else{
        props.signUp(formValues);
        console.log(formValues);
       }
         
    

      }
     
    return (
        
        <>
            <h2>Register</h2>
            <form
                onSubmit={props.handleSubmit(onSubmit)}
                className="ui form error"
            >
                <Field 
                    name="email" 
                    component={renderInput} 
                    label="Enter Email" 
                    type="text"
                />
                <Field
                    name="password"
                    component={renderInput}
                    label="Enter Password"
                    type="password"
                />
                <button className="ui button primary">Submit</button>
            </form>
        </>
    )
}

function isEmail(val) {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regEmail.test(val)){
    return 'Invalid Email';
  }
}
const validate = formValues => {
    const errors = {};
  
    if (!formValues.email) {
      errors.email = 'You must enter a email';
    }
  
    if (!formValues.password) {
      errors.password = 'You must enter a password';
    }

    if (isEmail(formValues.email)) {
        errors.email = "in valid email"
    } 
  
    return errors;
  };
const formWrap = reduxForm({
    form: 'Register',
    validate
})(Register)

export default connect(null, {signUp})(formWrap)