$.getJSON("https://api.ipify.org?format=json", function(data) {

    $("#ip").html(data.ip);

    async function getAddress(api) {
        let response = await fetch(`http://api.ipstack.com/${api}?access_key=5ec0bd2549991f472934c69d3f228722`);
        return await response.json();
    }
    getAddress(data.ip).then( data =>
        document.getElementById('country').innerHTML = data.country_name
    )
    getAddress(data.ip).then( data =>
        document.getElementById('city').innerHTML = data.city
    )
    getAddress(data.ip).then( data =>
        document.getElementById('zip').innerHTML = data.zip
    )
})
