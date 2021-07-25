const http = {
  get: async (url) => {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_API_KEY}/${url}`, {
      'Referrer-Policy': 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.json();
  },
  post: async (url, body) => {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_API_KEY}/${url}`, {
      method: 'post',
      'Referrer-Policy': 'no-referrer',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (response.status === 400) {
      throw new Error();
    }
    return response.json();
  },
  login: async (url, body) => {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_AUTHENTICATE}${url}`, {
      method: 'post',
      body: JSON.stringify(body),
      'Referrer-Policy': 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (response.status === 400) {
      throw new Error();
    }
    return response.json();
  },
  put: async (url, body) => {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_API_KEY}/${url}`, {
      method: 'put',
      'Referrer-Policy': 'no-referrer',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        referrer: process.env.REACT_APP_URL_BASE,
        Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
      },
    });
    return response.json();
  },
  delete: async (url, body) => {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/${process.env.REACT_APP_API_KEY}/${url}`, {
      method: 'delete',
      'Referrer-Policy': 'no-referrer',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        referrer: process.env.REACT_APP_URL_BASE,
        Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
      },
    });
    if (response.status === 400) {
      throw new Error();
    }
    return response.json();
  },
};

export default http;
