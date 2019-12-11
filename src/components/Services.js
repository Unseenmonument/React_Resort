import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title:"Free Cocktails",
                info:"Lorem ipsum jhyfkyg kghckh kytc trt rew utrs x trdj trf"
            },
            {
                icon: <FaHiking />,
                title:"Endless Hiking",
                info:"Lorem ipsum jhyfkyg kghckh kytc trt rew utrs x trdj trf"
            },
            {
                icon: <FaShuttleVan />,
                title:"Free Shuttle",
                info:"Lorem ipsum jhyfkyg kghckh kytc trt rew utrs x trdj trf"
            },
            {
                icon: <FaBeer />,
                title:"Strongest Beer",
                info:"Lorem ipsum jhyfkyg kghckh kytc trt rew utrs x trdj trf"
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                            return ( 
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article> 
                            );
                        })}
                </div>
            </section>
        );
    }
}
