import '../styles/modalStyle.css';
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { uuid } from 'uuidv4';


function ModalInput({ getNewMovie }) {
    const btnImgUrl = 'https://static.thenounproject.com/png/953211-200.png'

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [inputs, setInputs] = useState({
        id: uuid(),
        movieName: '',
        movieImg: '',
        movieRating: '',
        trailer: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value })
    }
    const closeWithDelay = () => {
        setInputs({
            movieName: '',
            movieImg: '',
            movieRating: ''
        })
        setTimeout(() => {
            setOpen(false)
        }, 300)
    }

    return (
        <div id='addBtnContainer' >
            <button type="button" onClick={handleOpen} id='addBtn'>
                <img src={btnImgUrl} alt='add icon' width='100px' />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div id='modalBody' >
                    <h2 id="simple-modal-title">Add your favorite movie</h2>
                    <form onSubmit={handleSubmit}>
                        <input type='text'
                            placeholder='movie name'
                            id='movieName'
                            name='movieName'
                            value={inputs.movieName}
                            onChange={handleSubmit}
                        />
                        <input
                            type='text'
                            placeholder='movie image'
                            id='movieImg'
                            name='movieImg'
                            value={inputs.movieImg}
                            onChange={handleSubmit}
                        />
                        <input
                            type='text'
                            placeholder='movie rating 1-5'
                            id='movieRating'
                            name='movieRating'
                            value={inputs.movieRating}
                            onChange={handleSubmit}
                        />
                        <input
                            type='text'
                            placeholder='add movie trailer'
                            id='trailer'
                            name='trailer'
                            value={inputs.trailer}
                            onChange={handleSubmit}
                        />
                        <span onClick={closeWithDelay} >
                            <Button
                                type='submit'
                                variant="contained"
                                color="primary"
                                onClick={() => getNewMovie(inputs)}
                            >
                                Submit
                            </Button>
                        </span>
                    </form>
                </div >
            </Modal>
        </div>
    );
}


export default ModalInput
