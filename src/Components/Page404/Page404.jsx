import React from 'react';
import './Page404.scss';
import {NavLink} from 'react-router-dom';

const Page404 = () =>{
    return(
        <div className='Page404'>
            <h4>
                404 <span>- <u><br/></u>сторінку <u><br/></u><br/>не знайдено</span>
            </h4>
            <p>Щось пішло не так :( <u><br/></u>  Спробуйте <br/> пізніше
                <NavLink to = '/'>
                    <h6>Повернутись на головну</h6>
                </NavLink>
            </p>
            
        </div>
    );
}

export default Page404;