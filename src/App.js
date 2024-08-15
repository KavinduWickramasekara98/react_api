import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import { Container,Row ,Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
import MyCard  from './MyCard';

function App() {
  const[details,setDetails]=useState({}) //object nisa ({}) ehema naththan ()
  const fetchDetails = async()=>{
  const {data} = await Axios.get('https://randomuser.me/api/');
  console.log("Response is : ",data);
  const details = data.results[0];
  setDetails(details);
  }
  useEffect(()=>{
    fetchDetails();
  },[])
  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <h1 class="soulmate">Find your Soulmate </h1>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}></MyCard>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
