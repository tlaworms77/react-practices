//  4. default parameter

const _print = function(strs, e='\n'){
    console.log(strs.join(e));
}

_print(['Always', 'with', 'me']);
_print(['Always', 'with', 'me'], ' ');
