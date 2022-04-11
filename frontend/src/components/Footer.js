import React from 'react'
import { container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Invoer</Col>
        </Row>
      </container>
    </footer>
  )
}

export default Footer

