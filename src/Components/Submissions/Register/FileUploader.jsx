import React from 'react';
import cx from 'classnames';
import styles from './FileUploader.module.css';

function ImageUploader(props) {
  const handleUpload = (e) => {
    e.preventDefault();
    const currentFile = e.target.files[0];
    if (currentFile) {
      const reader = new FileReader();
      reader.readAsDataURL(currentFile);
      props.form.setFieldValue(props.field.name, currentFile);
    }
  };

  return (
    <>
      <label
        className={cx(
          styles['form-control'],
          props.form.touched[props.field.name] && props.form.errors[props.field.name] ? styles['is-invalid'] : ''
        )}
      >
        <input id={props.field.name} name={props.field.name} type="file" onChange={handleUpload} />
        <span>{props.label}</span>
      </label>
    </>
  );
}
export default ImageUploader;
