import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import NewsService from '../axios/NewsService';
import ItemListNews from '../components/ItemListNews';
import Image from '../images/refresh.png';
import './NewsPage.css';

const HomePage = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState([]);

    function getNewNews() {
        NewsService.getNewNews().then((response) => {
            setPage(response.data.slice(0, 100))
        })
    }
    useEffect(() => {
        getNewNews();
    }, [])


    useEffect(() => {
        async function getNews() {
            page.forEach(id => {
                let promise = new Promise((resolve, reject) => {
                    NewsService.getOneNews(id).then(res => { resolve(res.data); })
                })
                promise.then(val => {
                    setNews(prevState => [...prevState, val])
                })
            });
        }
        setNews([]);
        getNews();
    }, [page])

    return (
        <Container fluid="md" className='mt-3 newsCard'>
            <Card>
                <Card.Header className='newsHeader d-flex flex-row-reverse' >
                    <div className='imgRefreshDiv' onClick={() => getNewNews()}>
                        <img className='imgRefresh' src={Image} alt='refresh' />
                    </div>
                </Card.Header>
                <Card.Body>
                    {news.map(item => (
                        <ItemListNews news={item} key={item.id} />
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HomePage;