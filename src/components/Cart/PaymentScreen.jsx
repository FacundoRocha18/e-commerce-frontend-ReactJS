import React, { useState } from 'react'

/* Styles imports */
import style from "./PaymentScreen.module.css";
import css from "classnames";

const PaymentScreen = () => {

    const [paymentData, setPaymentData] = useState({
        type: null,
        email: null,
        address: null,
        number: null,
        holder: null,
        exp: null,
        ccv: null
    });

    const [isChecked, setIsChecked] = useState(false);

    const [isSelected, setIsSelected] = useState(false);

    const [isDisabled, setIsDisabled] = useState(true);


    const handleInputChange = ({ target }) => {

        switch (target.name) {
            case 'email':
                setPaymentData({
                    ...paymentData,
                    email: target.value
                })
                break;
            case 'address':
                setPaymentData({
                    ...paymentData,
                    address: target.value
                })
                break;
            case 'num':
                setPaymentData({
                    ...paymentData,
                    number: target.value
                })
                break;
            case 'holder':
                setPaymentData({
                    ...paymentData,
                    holder: target.value
                })
                break;
            case 'exp':
                setPaymentData({
                    ...paymentData,
                    exp: target.value
                })
                break;
            case 'code':
                setPaymentData({
                    ...paymentData,
                    ccv: target.value
                })
                break;
            default:
                break;
        }
    }

    const handleSelect = ({ target }) => {

        setPaymentData({
            ...paymentData,
            type: target.name
        });
        setIsSelected(!isSelected);
    }

    const handleCheckChanged = () => {

        setIsChecked(!isChecked);

        if (isChecked === false) {

            return setIsDisabled(false);
        }

        setIsDisabled(true);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(paymentData)
        alert('Data submited');

    };


    return (
        <>
            <div className='main-content-wrapper'>
                <div className={style.container}>
                    <div className={style.header}>
                        <h2 className='title-center'>Payment options</h2>
                    </div>
                    <div className={style.body}>
                        <div className={style.buttons}>
                            <input type='button' name='credit' value='credit card' onClick={(e) => handleSelect(e)} className={css(style.button, style.selected_btn)}></input>
                            <input type='button' name='debit' value='debit card' onClick={(e) => handleSelect(e)} className={css(style.button, style.selected_btn)}></input>
                            <input type='button' name='cash' value='Cash' onClick={(e) => handleSelect(e)} className={css(style.button, style.selected_btn)}></input>
                        </div>
                        <div className={style.form_container}>
                            <form onSubmit={handleSubmit}>
                                <div className={style.input_group}>
                                    <label htmlFor='email' title='Email del due??o de la tarjeta'>Tu email: </label>
                                    <input type='email' name='email' onChange={(e) => handleInputChange(e)} id='email' placeholder='ejemplo@email.com' title='Email del due??o de la tarjeta' required />
                                </div>
                                <div className={style.input_group}>
                                    <label htmlFor='address' title='Direcci??n de facturaci??n'>Direcci??n de facturaci??n: </label>
                                    <input type='text' name='address' onChange={(e) => handleInputChange(e)} id='address' placeholder='Direcci??n' title='Direcci??n de facturaci??n' required></input>
                                </div>
                                <div className={style.input_flex}>
                                    <div className={css(style.input_group)}>
                                        <label htmlFor='c_number' title='N??mero de la tarjeta'>N??mero de tarjeta: </label>
                                        <input type='text' name='num' onChange={(e) => handleInputChange(e)} className={style.wd_80} id='c_number' placeholder='N??mero de tarjeta' title='N??mero de la tarjeta' required />
                                    </div>
                                    <div className={style.input_group}>
                                        <label htmlFor='c_exp' title='Fecha de vencimiento de la tarjeta'>Expira: </label>
                                        <input type='date' name='exp' onChange={(e) => handleInputChange(e)} id='c_exp' placeholder='exp' title='Fecha de vencimiento de la tarjeta' required></input>
                                    </div>
                                </div>
                                <div className={style.input_flex}>
                                    <div className={css(style.input_group)}>
                                        <label htmlFor='c_holder' title='Ingrese el nombre del titular escrito en la tarjeta'>Nombre del titular: </label>
                                        <input type='text' name='holder' onChange={(e) => handleInputChange(e)} className={style.wd_80} id='c_holder' placeholder='Nombre del titular' title='Ingrese el nombre del titular escrito en la tarjeta' required />
                                    </div>
                                    <div className={style.input_group}>
                                        <label htmlFor='c_cod' title='C??digo de seguridad de la tarjeta (parte de atr??s de la tarjeta)'>C??digo de seguridad: </label>
                                        <input type='text' name='code' onChange={(e) => handleInputChange(e)} id='c_cod' placeholder='CVV' title='C??digo de seguridad de la tarjeta (parte de atr??s de la tarjeta)' required></input>
                                    </div>
                                </div>
                                <div className={style.input_group}>
                                    <div className={style.input_flex}>
                                        <input type='checkbox' onChange={handleCheckChanged} className={style.chkbox}></input>
                                        <p>Aceptar las bases y condiciones</p>
                                    </div>
                                </div>
                                <div className={style.input_group}>
                                    <button type='submit' disabled={isDisabled} className={css('btn', style.confirm)} ><p>Confirmar</p></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PaymentScreen;
