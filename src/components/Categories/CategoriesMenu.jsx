import React from 'react'

/* Styles imports -------------------------------- */
import style from "./CategoriesMenu.module.css";

/* Components -------------------------------- */
import CategoriesItem from './CategoriesItem';

const CategoriesMenu = ({ categories }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.menu}>
                    {
                        categories.map((cats) => (
                            <CategoriesItem
                                key={cats.id}
                                name={cats.name}
                                cats={cats}
                                {...cats}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CategoriesMenu;
