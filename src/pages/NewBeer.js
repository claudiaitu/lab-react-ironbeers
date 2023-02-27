import { useState } from "react";

import axios from "axios";


const NewBeer = () => {

    const [ name, setName ] = useState('')
    const [ tagline, setTagline ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ first_brewed, setFirst ] = useState('')
    const [ brewers_tips, setTips ] = useState('')
    const [ attenuation_level, setAttenuation ] = useState(null)
    const [ contributed_by, setContributed ] = useState('')


    const handleSubmit = () => {

    }

    return (
        <div>
            <h1>New</h1>
            
            <form onSubmit={handleSubmit}>

            <label>name</label>
            <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label>tagline</label>
            <input type='tagline' name="tagline"/>

            <label>description</label>
            <input type='description' name="description"/>

            <label></label>
            <input type='text'/>

            <label></label>
            <input type='text'/>

            <label></label>
            <input type='number'/>

            <label></label>
            <input type='text'/>

            <button type="submit">Add Beer</button>

            </form>

        </div>
    )
}

export default NewBeer;