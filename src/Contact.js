import { useFormik } from "formik";
import "./App.css";
import * as Yup from 'yup';



function Contact() {
  const schema = Yup.object().shape({
    email: Yup.string().email()
  });
  
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      message:"",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema
  });

  const { values, handleChange, handleSubmit, errors} = form;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">name</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input name="email" value={values.email} onChange={handleChange} />
          {errors.email ? errors.email : null}

        </div>
        <div>
          <label htmlFor="">message</label>
          <textarea onChange={handleChange}name="message">{values.message}
          </textarea>
        </div>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default Contact;