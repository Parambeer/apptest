for (var i=0; i<10; i++) {
    console.log('i is ' + i)
    setTimeout(function() {
        console.log('i: ' + i);
    }, i*1000)
}