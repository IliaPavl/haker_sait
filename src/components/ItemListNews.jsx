import React, { useEffect, useState } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import './ItemList.css';
import { useNavigate } from 'react-router-dom';
import { NEWS_PAGE } from '../const/Consts';

const ItemListNews = ({ news }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hourse, setHourse] = useState('');
    const navigate =useNavigate();
    useEffect(() => {
        function setParse(val) {
            if (val < 10)
                return '0' + val;
            return val;
        }
        if (news !== undefined) {
            let date = new Date(news.time * 1000);
            setMinutes(setParse(date.getMinutes()))
            setDay(setParse(date.getDay()));
            setYear(date.getFullYear());
            setMonth(setParse(date.getMonth()));
            setHourse(setParse(date.getHours()));
        }
    }, [news])

    function goTo(id){
        navigate(NEWS_PAGE+'/'+id);
    }

    return (
        <ListGroup className='item mb-2'>
            <ListGroup.Item className="date text-muted">{hourse}:{minutes} {day}.{month}.{year} </ListGroup.Item>
            <ListGroup.Item className='itemText' onClick={()=>goTo(news.id)}>{news.title}</ListGroup.Item>
            <ListGroup.Item className=" footer text-muted">
                Author:
                <Badge pill bg="success" className='badgeAuthor'>
                    {news.by}
                </Badge>
                Raitig:
                <Badge bg="info" className='badgeRaiting'>
                    {news.score}
                </Badge>
            </ListGroup.Item>
        </ListGroup>

    );
};

export default ItemListNews;