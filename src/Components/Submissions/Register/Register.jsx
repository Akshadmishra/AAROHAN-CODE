import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Social from '../../Others/Social/Social';
import { FormLeft } from '../../static';
import RegisterForm from './RegisterForm';
import { login, logout, firestore, storage } from '../../../Utils/auth';
import styles from './Register.module.css';

const logger = () => {
  const user = localStorage.getItem('logged');
  return user && user === 'true';
};

const getUID = () => {
  return localStorage.getItem('uid');
};

function Register(props) {
  const [isLogged, setIsLogged] = useState(logger());
  const [display, setDisplay] = useState([localStorage.getItem('photo'), localStorage.getItem('name')]);

  const [percentage, setPercentage] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(true);
    if (result === true) {
      setIsLogged(true);
      setDisplay([localStorage.getItem('photo'), localStorage.getItem('name')]);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    setIsLogged(false);
  };

  const uploadData = (file) => {
    const storageRef = storage.ref(`aarohan/${getUID()}/${file.name}`);

    return new Promise((resolve) => {
      storageRef.put(file).on(
        'state_changed',
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setPercentage(percentage);
        },
        (err) => {
          console.error(err);
          return resolve('');
        },
        async () => {
          try {
            const url = await storageRef.getDownloadURL();
            return resolve(url);
          } catch (err) {
            console.error(err);
            return resolve('');
          }
        }
      );
    });
  };

  // Promise is a async job, i.e. it takes time
  // It has 3 states : <Pending> -> function is called <Resolved> -> execution success <Reject> -> execution failed
  // .then or await => both wait till function has exited from <pending>
  // .catch or await try catch

  const setSubmission = async (data) => {
    const colRef = firestore.doc(`aarohan/${getUID()}`);
    try {
      await colRef.set(data);
      alert('Submission Successful');
    } catch (err) {
      console.log(err);
    }
  };

  const formReturn = async (values) => {
    try {
      const recptSSN = await uploadData(values.recptSSN);
      const file = await uploadData(values.file);
      values.recptSSN = recptSSN;
      values.file = file;
      values.email = localStorage.getItem('email');
      await setSubmission(values);
      return;
    } catch (err) {
      console.error(err);
      return;
    }
  };

  return (
    <div className={styles.regContainer}>
      <div className={styles.regFlexContainer}>
        <div className={styles.regFlexLeft}>
          <h1>REGISTER NOW !</h1>
        </div>
        <div className={styles.regFlexRight}>
          {isLogged ? (
            <>
              <div className={styles.regRightTopFlex}>
                <div className={styles.regRightTopFlexLeft}>
                  <img className={styles.formThumb} src={display[0]} alt="Profile" />
                  <h3 className={styles.formThumbHead}>{display[1]}</h3>
                </div>
                <button className={styles.signOut} onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
              <RegisterForm formReturn={formReturn} percentage={percentage} />
            </>
          ) : (
            <div className={styles.signInContainer}>
              <h3 className={styles.authText}>Please Authenticate Yourself Before Filling The Registration Form</h3>
              <h3 style={{ fontSize: '14px' }} className={styles.authText}>
                For Competition Related Queries, Contact +91-9011012677
              </h3>
              <h3 style={{ fontSize: '14px' }} className={styles.authText}>
                For Payment Related Queries, Contact +91-9892720662
              </h3>
              <button className={styles.signIn} onClick={handleLogin}>
                Google Sign In
              </button>
              <div className={styles.authBottom}>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1NwkIDNIR4q9itrZv5laN7CeK-nMKok3_/view?usp=drivesdk"
                >
                  View Brochure
                </a>
                <a
                  className={styles.signIn}
                  href="https://drive.google.com/file/d/1OKRkJlA61WLLujAY2T6lVO6w53tlkkOA/view?usp=drivesdk"
                >
                  View Rulebook
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.regFormLeft}>
        <FormLeft />
      </div>
      <Social />
      <Navbar />
    </div>
  );
}

export default Register;
