
export default function(state={} , action){
    switch(action.type){
        case 'ACTION_1':
            return { ...state , data : action.payload };
        default:
            return state;
    }
}