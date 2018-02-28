export default function RouteExistsGuard(to, from, next){
        console.info("RouteExists guard triggered");
    if(to.matched.some( (record) => true )){
        next();
    }else{
        next({name: '404'});
    }    
}
