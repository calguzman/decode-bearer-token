
const decodeToken = (bearerToken) =>  {
  if(!bearerToken){
    throw new Error('The Token is Missing');
  }
  if(bearerToken.indexOf('Bearer ') ===  -1){
    throw new Error('Token Invalid Format');
  }
  let token = bearerToken.replace('Bearer ','');
  return token;
}
module.exports = {
  decodeToken
}