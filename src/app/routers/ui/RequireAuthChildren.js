
export const RequireAuthChildren = ({children, auth}) => {
    if (auth) {
        return children
    }
}
