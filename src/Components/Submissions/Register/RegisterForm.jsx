import React from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import { motion } from 'framer-motion';

import { regSchema } from '../../../Utils/validation';

import FileUploader from './FileUploader';

import styles from './RegisterForm.module.css';

const initial = {
  name: '',
  contact: '',
  compName: '', //TODO: Make a dropdown list
  college: '',
  dob: '',
  recptNo: '',
  recptSSN: undefined, //TODO: SS
  file: undefined
};

const data = [
  {
    type: 'text',
    field: 'name',
    label: 'Applicant Name',
    placeholder: 'Enter your name'
  },
  {
    type: 'number',
    field: 'contact',
    label: 'Contact',
    placeholder: 'Enter your contact no.'
  },
  {
    type: 'text',
    field: 'college',
    label: 'College / Organisation',
    placeholder: 'Enter your college'
  },
  {
    type: 'date',
    field: 'dob',
    label: 'Date of birth (age >= 16 Years)',
    placeholder: 'Enter the Date of birth'
  },
  {
    type: 'text',
    field: 'recptNo',
    label: 'Transaction ID',
    placeholder: 'Transaction ID'
  }
];

function Select(props) {
  const makeOption = (option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  );

  const handleChange = (event) => {
    props.onChange(event.target.id, event.target.value);
    event.preventDefault();
  };

  const handleBlur = (event) => {
    props.onBlur(props.id, true);
    event.preventDefault();
  };

  const { id, name, value, options, onBlur } = props;

  return (
    <>
      <select
        id={id}
        name={name}
        component="select"
        onChange={handleChange}
        onBlur={onBlur && handleBlur}
        value={value}
        className={styles.optional}
      >
        {options.map(makeOption)}
      </select>
    </>
  );
}

function RegisterForm({ formReturn, percentage }) {
  const submission = async (values, { setSubmitting, setStatus, resetForm }) => {
    setSubmitting(true);
    await formReturn(values);
    resetForm({});
    setStatus({ success: true });
    setSubmitting(false);
  };

  const generateFields = ({ type, field, label, placeholder }, key) => {
    return (
      <Field name={field} key={key}>
        {(props) => (
          <div className={styles['form-group']}>
            <label htmlFor={field}>{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              className={cx(styles['form-control'], props.meta.touched && props.meta.error ? styles['is-invalid'] : '')}
              {...props.field}
            />
            {props.meta.touched && props.meta.error && (
              <motion.div
                layout="true"
                initial={{ opacity: 0, x: '-1rem' }}
                animate={{ opacity: 1, x: '0rem' }}
                className={styles['invalid-feedback']}
              >
                {props.meta.error}
              </motion.div>
            )}
          </div>
        )}
      </Field>
    );
  };

  const compOptions = [
    { value: 'inner flame', label: 'Inner Flame (₹65)' },
    { value: 'humming', label: 'Humming (₹65)' },
    { value: 'mood to dood', label: 'Mood to Dood (₹60)' },
    { value: 'blink n click', label: 'Blink n Click (₹60)' },
    { value: 'lit up', label: 'Lit Up (₹60)' },
    { value: 'euphony', label: 'Euphony (₹60)' },
    { value: 'art maestro', label: 'Art Maestro (₹60)' },
    { value: 'spotlight', label: 'Spotlight (₹60)' }
  ];

  const generateSelector = (values, setFieldValue) => {
    return (
      <Field name="compName">
        {(props) => (
          <div className={styles['form-group']}>
            <label htmlFor="compName">Competition Name</label>
            <Select
              id="compName"
              name="compName"
              value={values.compName}
              options={compOptions}
              onChange={(field, value) => {
                setFieldValue(field, value);
              }}
            />
            {props.meta.touched && props.meta.error && (
              <motion.div
                layout="true"
                initial={{ opacity: 0, x: '-1rem' }}
                animate={{ opacity: 1, x: '0rem' }}
                className={styles['invalid-feedback']}
              >
                {props.meta.error}
              </motion.div>
            )}
          </div>
        )}
      </Field>
    );
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['main-row']}>
        <Formik initialValues={initial} validationSchema={regSchema} onSubmit={submission}>
          {({ touched, errors, handleSubmit, isSubmitting, isValid, status, values, setFieldValue }) => (
            <Form
              loading={String(isSubmitting)}
              success={status && String(status.success)}
              error={errors.submit}
              onSubmit={handleSubmit}
            >
              {data.map((elem, index) => generateFields(elem, index))}

              {generateSelector(values, setFieldValue)}

              <div className={styles['form-upload']}>
                <Field
                  name="recptSSN"
                  component={FileUploader}
                  label="+ Payment Screenshot"
                  className={cx(
                    styles['form-control'],
                    touched.recptSSN && errors.recptSSN ? styles['is-invalid'] : ''
                  )}
                />
                {errors.recptSSN && (
                  <motion.div
                    layout="true"
                    initial={{ opacity: 0, x: '-1rem' }}
                    animate={{ opacity: 1, x: '0rem' }}
                    className={styles['invalid-feedback']}
                  >
                    {errors.recptSSN}
                  </motion.div>
                )}
              </div>

              <div className={styles['form-upload']}>
                <Field
                  name="file"
                  component={FileUploader}
                  label="+ Attach Media"
                  className={cx(styles['form-control'], touched.file && errors.file ? styles['is-invalid'] : '')}
                />
                {errors.file && (
                  <motion.div
                    layout="true"
                    initial={{ opacity: 0, x: '-1rem' }}
                    animate={{ opacity: 1, x: '0rem' }}
                    className={styles['invalid-feedback']}
                  >
                    {errors.file}
                  </motion.div>
                )}
              </div>

              <button type="submit" className={styles['btn-submit']} disabled={isSubmitting || !isValid}>
                {isSubmitting ? `Please wait... (${percentage}%)` : `Submit`}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterForm;
