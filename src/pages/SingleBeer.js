import { useEffect, useState } from "react";
import axios from "axios";
import Beer from "../components/Beer";
import { useParams } from "react-router-dom";

const SingleBeer = () => {

    const [ beer, setBeer ] = useState({})

    const {id} = useParams()


    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
            setBeer(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

    });

    return (
        <div>
            <h1>Details</h1>

            {
                beer._id ?

                <Beer beer={beer} />

                : <h4>Loading...</h4>
            }



        </div>
    )
}

export default SingleBeer;