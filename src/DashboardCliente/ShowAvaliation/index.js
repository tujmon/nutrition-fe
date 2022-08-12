/* eslint-disable react/prop-types */
// import styles from './style.module.scss';
import { useState, useEffect } from 'react';
import Modal from '../../components/modal';

function ShowAvaliation({ setIsOpen, avaliationId }) {
  const [avaliation, setAvaliation] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/avaliation/${avaliationId}`)
      .then(((response) => response.json()))
      .then((data) => {
        setAvaliation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <Modal setIsOpen={setIsOpen}>
      <h1>Show Avaliation</h1>
      <p />
      {
        Object.keys(avaliation).map((item) => (
          <p>
            {' '}
            {item}
            {' '}
            =
            {' '}
            {avaliation[item]}
            {' '}
          </p>
        ))
      }
    </Modal>

  );
}

export default ShowAvaliation;
