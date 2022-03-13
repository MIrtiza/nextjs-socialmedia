import { Field, reduxForm } from 'redux-form';
import { signUp } from '../../redux-src/actions/'
import { connect } from 'react-redux'

export const Register = (props) => {
  const  renderError =({ error, touched })=> {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }
  const renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
          <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {renderError(meta)}
          </div>
        );
      };
     const onSubmit =(formValues)=> {
         props.signUp(formValues);
        console.log(formValues);
      }
     
    return (
        
        <>
            <h2>Register</h2>
            <form
                onSubmit={props.handleSubmit(onSubmit)}
                className="ui form error"
            >
                <Field name="title" component={renderInput} label="Enter Title" />
                <Field
                    name="description"
                    component={renderInput}
                    label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        </>
    )
}


const validate = formValues => {
    const errors = {};
  
    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }
  
    if (!formValues.description) {
      errors.description = 'You must enter a description';
    }
  
    return errors;
  };
const formWrap = reduxForm({
    form: 'Register',
    validate
})(Register)

export default connect(null, {signUp})(formWrap)