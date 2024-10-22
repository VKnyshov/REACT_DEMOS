import React from 'react';
import {useForm} from "react-hook-form";
import {IFormProps} from "../models/IFormProps";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {apiService} from "../services/api.service";


const FormComponent = () => {


    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }

    } = useForm<IFormProps>({mode: 'all', resolver: joiResolver(postValidator)});

    const customHandler = async (dataFromForm: IFormProps) => {
        console.log('want to send', dataFromForm);
        console.log(await apiService.post.savePost(dataFromForm));
    };


    return (
        <div>

            <form onSubmit={handleSubmit(customHandler)}>

                <div>
                    <input type="number" placeholder={'User ID'} {...register('userId')}/>
                </div>
                {errors.userId && <div>{errors.userId.message}</div>}
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