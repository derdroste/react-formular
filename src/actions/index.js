export const setState = ({input, actionType, handler}) => ({
    type: actionType,
    form: input,
    handler: handler
});