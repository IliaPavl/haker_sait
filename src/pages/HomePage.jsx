import React from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import ItemListNews from '../components/ItemListNews';
import './NewsPage.css'
import Image from '../images/refresh.png'

const HomePage = () => {
    const news = [
        { name: "Unlimiformer: Long-Range Transformers with Unlimited Length Input", raits: "5.5", author: "Nik", date: "12.12.2023" },
        { name: "Fulfilling a reader's request for my “dot files”", raits: "5.2", author: "Nik", date: "12.12.2023" },
        { name: "Waymo One doubles service area in Phoenix, continues growing in SF", raits: "5.5", author: "Nik", date: "12.12.2023" },
        { name: "news1", raits: "5.5", author: "Nik", date: "12.12.2023" },
        { name: "news1", raits: "5.5", author: "Nik", date: "12.12.2023" }]
    return (
        <Container fluid="md" className='mt-3 newsCard'>
            <Card>
                <Card.Header className='newsHeader d-flex flex-row-reverse' >
                    <div className='imgRefreshDiv'>
                        <img className='imgRefresh' src={Image} alt='refresh' />
                    </div>
                </Card.Header>
                <Card.Body>
                    {news.map(item => (
                        <ItemListNews news={item} />
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HomePage;