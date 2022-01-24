import React from 'react';
import './Category.css';
import Card from 'react-bootstrap/Card';
import item1 from '../assets/item1.svg';
import item2 from '../assets/item2.svg';
import item3 from '../assets/item3.svg';
import item4 from '../assets/item4.svg';

const Category = (props) => {
    return(
        <div>
            <div id='categoryHeader'>Category name</div>
            <div id='categoryCards'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item1} />
                    <Card.Body>
                      <Card.Title>Apollo Running Short</Card.Title>
                      <Card.Text>50$</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item2} />
                    <Card.Body>
                      <Card.Title>Apollo Running Short</Card.Title>
                      <Card.Text>50$</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item3} />
                    <Card.Body>
                      <Card.Title>Apollo Running Short</Card.Title>
                      <Card.Text>50$</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item4} />
                    <Card.Body>
                      <Card.Title>Apollo Running Short</Card.Title>
                      <Card.Text>50$</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item1} />
                    <Card.Body>
                      <Card.Title>Apollo Running Short</Card.Title>
                      <Card.Text>50$</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item3} />
                    <Card.Body>
                      <Card.Title>Apollo Running Short</Card.Title>
                      <Card.Text>50$</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Category;