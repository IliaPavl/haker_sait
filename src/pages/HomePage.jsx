import React from 'react';
import { Card, Container } from 'react-bootstrap';
import ItemListNews from '../components/ItemListNews';

const HomePage = () => {
    const news = [{ name: "news1", raits: "5.5", author: "Nik", date: "12.12.2023" }, { name: "news1", raits: "5.5", author: "Nik", date: "12.12.2023" }, { name: "news1", raits: "5.5", author: "Nik", date: "12.12.2023" }, { name: "news1", raits: "5.5", author: "Nik", date: "12.12.2023" }, { name: "news1", raits: "5.5", author: "Nik", date: "12.12.2023" }]
    return (
        <Container fluid="md" className='mt-3 '>
            <Card>
                <Card.Header>
                    Last news
                </Card.Header>
                <Card.Body>
                    {news.map(item => (
                        <ItemListNews news={item} />
                    ))}
                    body
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HomePage;