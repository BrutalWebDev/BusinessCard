import React, {Fragment} from "react";
import { BsCameraFill } from "react-icons/bs";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IoMdSnow } from "react-icons/io";
import { GiYinYang } from "react-icons/gi";
import { Button } from 'react-bootstrap';

const Siconses = '25';

export const Home = () => {
    return (
        <Fragment>
            <header className="container ctr">
                <div className="siteUP">
                    <h3>Hello, i'm</h3>
                    <h1>Nemov Andrey</h1>
                    <p className ="textLight">Fullstack Developer</p>
                </div>
                <div className="row main">
                    <div className="col-md">
                        <div className="me"></div>
                    </div>
                    <div className="col-md"></div>
                    <div className="col-md siteMiddle">
                        <p><BsCurrencyExchange/>&emsp;Богатый опыт в UI/UX - дизайне</p>
                        <p><BsCameraFill/>&emsp;Люблю фотографировать</p>
                        <p><GiYinYang/>&emsp;Очень проницательный человек</p>
                        <p><IoMdSnow/>&emsp;Живу на крайнем севере в Мурманске</p>
                        <div className="btns">
                            <Button className="btnsCV" variant="outline-info">Скачать резюме</Button>
                            <Button variant="info">Связаться</Button>
                        </div>
                        <div className="ctrIconses">
                            <a href="#"><BsInstagram size={Siconses}/></a>
                            <a href="https://github.com/BrutalWebDev" target="blank"><BsGithub size={Siconses}/></a>
                        </div>
                    </div>
                </div>
            </header> 
        </Fragment>
    );
}

export default Home;