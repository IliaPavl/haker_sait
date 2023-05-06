import React from 'react';
import { Badge, Col, Form, ListGroup, Row } from 'react-bootstrap';
import './ItemList.css'

const ItemListNews = ({ news }) => {
    return (
        <ListGroup className='item mb-2'>
            <ListGroup.Item className="date text-muted">{news.date}</ListGroup.Item>
            <ListGroup.Item className='itemText'>{news.name}</ListGroup.Item>
            <ListGroup.Item className=" footer text-muted">
                Author:
                <Badge pill bg="success" className='badgeAuthor'>
                    {news.author}
                </Badge>
                Raitig:
                <Badge bg="info" className='badgeRaiting'>
                    {news.raits}
                </Badge>
            </ListGroup.Item>
        </ListGroup>

    );
};

export default ItemListNews;