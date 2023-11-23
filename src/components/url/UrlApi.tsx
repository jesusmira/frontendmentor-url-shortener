import React from 'react'
import { getEnvironments } from '../helpers/getEvironments';

export const UrlApi = async (urlText: string) => {
  const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
  let link = {
    url: '',
    link: ''
  }
  const { PUBLIC_APIHOST, PUBLIC_APIKEY} = getEnvironments();
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': PUBLIC_APIKEY,
      'X-RapidAPI-Host': PUBLIC_APIHOST
    },
    body: new URLSearchParams({
      url: urlText
    })
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
    
  } catch (error) {
    console.error(error);
  }
  
}
