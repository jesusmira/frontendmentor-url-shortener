export const getEnvironments = () => {
 
    //import.meta.env;
    return{
        //...import.meta.env,
        PUBLIC_APIKEY: import.meta.env.PUBLIC_APIKEY,
        PUBLIC_APIHOST: import.meta.env.PUBLIC_APIHOST
    }

}