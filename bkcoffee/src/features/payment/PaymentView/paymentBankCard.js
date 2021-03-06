import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './payment.css'
import DropPayment from '../PaymentController/dropdown';
import {TiArrowDownOutline} from 'react-icons/ti';
//import { LoginContext } from '../../SharedComponent/LoginContext';



class PaymentCard extends Component {
    render(){
         
        return (
            <Container>
                 <Row>
            <Col xs={3}> 
            <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
              </Col>
              <Col x={6}>
                <div id="maiz">
                <img class=" img-fluid ko"  src="/assets/images/fix.gif" alt=""/>
                </div>
           <h2 style={{textAlign: "center", fontWeight: 'bold', fontSize: '3vw',}}>Tính năng thanh toán này đang được bảo trì.</h2>
           <h2 style={{textAlign: "center", fontWeight: 'bold', fontSize: '3vw',}}>Quý khách vui lòng chọn hình thức thanh toán khác.</h2>
           <span id="maiz" className='koo'> <TiArrowDownOutline /></span>
          <span style={{textAlign: "center"}}> <DropPayment /></span> 
          </Col>
          <Col xs={3}> 
            <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
              </Col>
              </Row>
          </Container>
            
            
        );
    }
}
export default PaymentCard;