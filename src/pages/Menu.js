import React, {Fragment} from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

export const Menu = () => {
    return (
        <Fragment>
            <nav>
                <a href="#"><AiOutlineHome/></a>
                <a href="#"><AiOutlineUser/></a>
                <a href="#"><BiBook/></a>
                <a href="#"><RiServiceLine/></a>
                <a href="#"><BiMessageSquareDetail/></a>
            </nav>
        </Fragment>
    );
}

export default Menu;