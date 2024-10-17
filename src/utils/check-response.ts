
function checkResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      return response.json();
    }
  
    return response.json().then((error) => Promise.reject(error));
}

export default checkResponse;