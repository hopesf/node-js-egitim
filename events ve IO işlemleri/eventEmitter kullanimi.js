const events = require('events');
const eventEmitter = new events.EventEmitter();

/*
eventEmitter.on('S.a', (obje) => {
    console.log(`Merhaba krdş ${obje.nbr} ${obje.iyi}`);
});
eventEmitter.emit('S.a', {nbr:'nasılsın', iyi:', iyimisin?'});
*/
eventEmitter.once('as', () => {
    console.log('merhaba');
});
eventEmitter.emit('as');
/*
    On classı sürekli çağrılınabilir.
    once classı sadece 1 kerelik çağrılınabilir.
*/