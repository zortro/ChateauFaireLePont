const handleConnection = async function(e, data) {
    e.preventDefault();

    const baseurl = 'https://fairelepont.herokuapp.com/'

    const response = await fetch(`${baseurl}/wine/getWines`, {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
    })

    const wines = await response.json();
    console.log(wines)
    return wines
}

export { handleConnection }