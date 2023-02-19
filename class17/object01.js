let friend = {name:'Joseph',
sex:'M',
weight:85.4,
fatten: function(p=0) {
    console.log('Fed up');
    this.weight += p;
}
};
friend.fatten(2);
console.log(typeof friend);
console.log(`${friend.name} weights ${friend.weight}`);
