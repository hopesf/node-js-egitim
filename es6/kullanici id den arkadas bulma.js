const kullanici = { id:1 , name :'coder'};
const arkadasi = [ { id:2 , name : 'hityo'} , { id:3 , name : 'madara'}];

const Kullbul = () => {
    return new Promise((olumlu, olumsuz) => {
        setTimeout(() => {
           olumlu(kullanici);
        }, 2000);
    });
};

const arkadasbul = () => {
    return new Promise((olumlu, olumsuz) => {
        setTimeout(() => {
            olumlu(arkadasi);
        }, 3000);
    });
};

// asyn await yapısı
async function asd () {
    const user = await  Kullbul();
    const kull = await  arkadasbul(kullanici.id);
    console.log(kullanici, arkadasi);
}
asd();