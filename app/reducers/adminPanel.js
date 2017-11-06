const adminPanel = (state = [],action) => {
    switch(action.type){
         case 'ADD_PROFESSOR:':
         return [
             ...state,
             {
                 id: action.id,
                 nom:action.nom,
                 correu:action.correu,
                 tipus:action.tipus,
                 data_creacio:action.data_creacio,
                 data_modificacio:action.data_modificacio,
                 data_conneio:action.data_connexio,
                 actiu:action.actiu,
                 codi_udg:action.codi_udg
             }
         ]
         case 'TOGGLE_PROFESSOR':
            return state.map(professor =>
                (professor.id === action.id) 
                ? {...professor, actiu: !professor.actiu}
                : professor
            )
        default:
            return state;
    }
}

export default adminPanel;