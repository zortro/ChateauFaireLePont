const getWine = async (e) => {
    e.preventDefault();

    const baseurl = 'https://fairelepont.herokuapp.com/'

    const response = await fetch(`${baseurl}/wine/getWines`, {
        method: 'GET',
        mode: 'cors'
    })
    try {
        const wine = await response.json()
        console.log(wine)

        return wine
    } catch (err) {
        console.log('error line 1 handleConnection(), connection.js')
        console.log(err)
    }
}

export default getWine