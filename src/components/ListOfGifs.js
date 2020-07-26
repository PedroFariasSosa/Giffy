import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs({ params }) {
    const { keyword } = params
    const [loading, setloading] = useState(false)
    const [gifs, setgifs] = useState([])

    useEffect(function () {
        setloading(true)
        getGifs({ keyword })
            .then(gifs => {
                setgifs(gifs)
                setloading(false)
            })
    }, [keyword])

    if (loading) return <i>Cargando espere por favor</i>

    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}