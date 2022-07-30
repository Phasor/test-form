import React from 'react'
import {useForm} from 'react-hook-form';

export default function CreateEventForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("data:  ", data);
    }

  return (
    <div className="create-event-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Create Your Event</h1>
            <hr/>
            <div className="flex-container">
                <div className="item-full-width">
                    <label for="event-name">Event Name:</label>
                    <input id="event-name" {...register("eventName", { required: true })} placeholder="Eth Hackathon 2022"/>
                </div>
                {errors.eventName?.type === 'required' && <p className="error">First name is required</p>}
                <div className="item-full-width">
                    <label>Event Date:</label>
                    <input {...register("date" , { required: true, maxLength: 8 })} placeholder="mm/dd/yy"/>   
                </div>
                {errors.date?.type === 'required' && <p className="error">Date is required</p>}
                {errors.date?.type === 'maxLength' && <p className="error">Must be 8 characters i.e. "01/01/20"</p>}
            </div>
            <div className='flex-container-half'>
                <div className="item-half-width">
                    <label>Time:</label>
                    <input {...register("time" ,{ required: true })} placeholder="19:00"/>  
                </div>
                {errors.time?.type === 'required' && <p className="error">Time is required</p>}
                <div className="item-half-width">
                    <label>Location:</label>
                    <input {...register("location",{ required: true })} placeholder="London"/>  
                </div>
                {errors.location?.type === 'required' && <p className="error">Location is required</p>}
            </div>
            <div className="flex-container">
                <div className="item-full-width">
                    <label>Description:</label>
                    <input {...register("description",{ required: true })} placeholder="Defi Hackathon on Eth"/>   
                </div>
                {errors.description?.type === 'required' && <p className="error">Description is required</p>}
                <div className="item-full-width">
                    <label>Ticket Price (Eth):</label>
                    <input type="number" {...register("price",{ required: true })} placeholder="0.02 ETH"/>   
                </div>
                {errors.price?.type === 'required' && <p className="error">Price is required</p>}
                <div className="item-full-width">
                    <label>Organisater Name:</label>
                    <input {...register("organiser",{ required: true })} placeholder="Vitalik Buterin"/>   
                </div>
                {errors.organiser?.type === 'required' && <p className="error">Organiser is required</p>}
                <div className="item-full-width">
                    <label>Event Image</label>
                    <input className="custom-upload" {...register("file",{ required: true })} type="file" id="file" name="file"/>
                </div>
                {errors.file?.type === 'required' && <p className="error">File is required</p>}
                <div className="item-full-width-checkbox">
                    <input className="checkbox" {...register("checkbox",{ required: true })} type="checkbox" id="checkbox" name="checkbox" value="1"/>
                    <label for="checkbox">I agree to pay 0.01 ETH for the creation of an event and that it is non refundable</label>
                </div>
                {errors.checkbox?.type === 'required' && <p className="error">You must agree to the declaration</p>}
            </div>
            <div className="flex-container-buttons">
                <button type="submit" className="button-submit">Create Event</button>
            </div>
              
       </form> 
    </div>  
  )
}
