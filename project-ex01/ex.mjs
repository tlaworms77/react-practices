const u = {
    App2: function(){ console.log('llll'); },
    k: function(){console.log('k');}
};

({ App2 } = u);
console.log(App2);
