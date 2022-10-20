import { useState, useEffect } from 'react'

export default function Get(ext, data) {
    const [wineList, setWineList] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const baseurl = 'https://fairelepont.herokuapp.com'
            try {
                const response = await fetch(`${baseurl}${ext}`)
                const result = await response.json()
                const list = (result)
                setWineList(list) 
            } catch (error) {
                console.log('err:', error)
            }
        }
        fetchData()
    }, [])
}