const host = '';

async function request(url, options) {
    try {

        const respons = await fetch(url, options);

        if (respons.ok === false) {
            const error = await respons.json();
            throw new Error(error.message);
        }

        try {

            const data = await respons.json();
            return data;

        } catch (err) {
            return respons;
        }

    } catch (err) {
        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    }

    const token = sessionStorage.getItem('authToken');

    if (token !== null) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions());

}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}

export async function login(data){
    const result = await post('/user/login', data);

    sessionStorage.setItem('authToken', result.authToken);
    sessionStorage.setItem('userName', result.userName);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function register(data){
    const result = await post('/user/login', data);

    sessionStorage.setItem('authToken', result.authToken);
    sessionStorage.setItem('userName', result.userName);
    sessionStorage.setItem('userId', result._id);

    return result;

}