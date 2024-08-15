import React from 'react';
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';
import{FaEnvelope, FaPhone,FaMapMarkedAlt} from 'react-icons/fa';
const MyCard = ({details})=>{
    return(
        <Card>
            <CardBody className='text-center'>
                <img height='150' width='150' className='rounded-circle img-thumbnail border-danger'
                
                src={details.picture?.large}

                />
                <CardTitle>
                    <h2>
                        <span className='pr-2'>{details.name?.title}</span>
                    </h2>
                    <h2>
                        <span className='pr-1'>{details.name?.first}</span>
                    </h2>
                    <h2>
                        <span>{details.name?.last}</span>
                    </h2>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt>

                    </FaMapMarkedAlt>
                    {details.location?.city}
                </CardText>
            </CardBody>
        </Card>
    )
}
export default MyCard;