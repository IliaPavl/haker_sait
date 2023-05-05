import React from 'react';

const ItemListNews = ({ news }) => {
    return (
        <div>
            <div>
                {news.name}
            </div>
            <div>
                {news.raits}
            </div>
            <div>
                {news.author}
            </div>
            <div>
                {news.date}
            </div>
        </div>
    );
};

export default ItemListNews;