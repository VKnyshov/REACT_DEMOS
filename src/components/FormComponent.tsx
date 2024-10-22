import React from 'react';
import {useForm} from "react-hook-form";
import {FormProps} from "../models/FormProps";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import axios from "axios";


const FormComponent = () => {


    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }

    } = useForm<FormProps>({mode: 'all', resolver: joiResolver(postValidator)});

    const customHandler = (dataFromForm: FormProps) => {
        console.log('want to send', dataFromForm);

        // ..........................................
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify(dataFromForm),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>
                console.log(json)
            );
        // ..........................................


        axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            params: dataFromForm
        }).then((response) => {
            console.log('second style', response.data);
        })


        // ..........................................


    };


    return (
        <div>

            <form onSubmit={handleSubmit(customHandler)}>

                <div>
                    <input type="number" placeholder={'User ID'} {...register('userId')}/>
                </div>
                {errors.userId && <div>{errors.userId.message}</div>}
                <div>
                    <input type="number" placeholder={'Post ID'} {...register('id')}/>
                </div>
                {errors.id && <div>{errors.id.message}</div>}

                <div>
                    <input type="text" placeholder={'Title'} {...register('title')}/>
                </div>
                {errors.title && <div>{errors.title.message}</div>}

                <div><input type="text" placeholder={'Body'} {...register('body')}/></div>
                {errors.body && <div>{errors.body.message}</div>}

                <button disabled={!isValid}>save</button>
            </form>


        </div>
    );
};

export default FormComponent;