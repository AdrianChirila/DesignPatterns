export const errorMessage = {
    UNAUTHORIZED: 'UnauthorizedError',
}

import {HTTP_STATUS} from "../utils/http-status"

export function errorHandler() {
    return async(ctx:any, next:any) => {
        try {
            await next();
            // Handle 404 upstream.
            var status = ctx.status || HTTP_STATUS.NOT_FOUND;
            if (status === HTTP_STATUS.NOT_FOUND)
                ctx.throw(HTTP_STATUS.NOT_FOUND);
        } catch (error:any) {
            console.log(error)
            ctx.status = HTTP_STATUS.INTERNAL_SERVER_ERROR
            ctx.body = {message: "Internal server error!"}
        }
    }
}