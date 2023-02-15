

export function buildRoutePath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g

    const pathWithParams = path.replaceAll( routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')
  
    const pathRegex =  new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

    return pathRegex

   /* id: 716aade7-057a-4708-9e3a-33e876e37cf2 */
}