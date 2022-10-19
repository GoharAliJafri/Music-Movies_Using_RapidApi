export const ApiOptions = {
   
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '4e82dd7119msh9f36422eff309d3p182f99jsn9f3004af0f12',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
}

export const FetchData= async(url,options)=>{
    const response=await fetch(url, options); 
    const data=await response.json();
        return data;  
       }
    //    console.log(data);