import React, {useState, useEffect} from 'react';
import {Button, Modal, Row, Col} from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';

const Posts = ({id}) => {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const {data} = useFetch(url);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleClick}>
        Post
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>{data && data.title}</Modal.Header>
        <Modal.Body>{data && data.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Posts;
