import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from "./components/character/Character";

const App: FC = () => {
    return (
        <>
            <Character name={'apple'}
                       color={'red'}
                       information={'cool'}
                       image={'https://flomaster.top/uploads/posts/2023-10/1697483085_flomaster-top-p-yablochko-risunok-pinterest-1.png'}
            />
            <Character
                name={'pear'}
                color={'yellow'}
                information={'bad'}
                image={'https://st.depositphotos.com/1902163/1955/i/450/depositphotos_19559331-stock-photo-pear.jpg'}
                children={'just some text`s'}
            />
            <Character name={'banana'}
                       image={'https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg'}
                       color={"yellow to"}
                       information={'to good'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta eligendi eum id inventore
                magnam minima, nostrum nulla qui recusandae tempore ullam vero voluptatem! Animi cumque facere hic nihil
                soluta!

            </Character>
        </>
    )
        ;
}

export default App;

