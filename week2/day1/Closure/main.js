//spot check 1
const family= () => {
    let members= []

    const birth= function (name) {
        members.push(name);
        console.log(members);

    }
    return birth;
}

const giveBirth = family();

giveBirth("yael");
giveBirth("yael");

//////////////////////////////////////
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    
  return {
      add: add,
      sub: subtract,
      mult: multiply,
      div: divide
  }
}

const m = mathOperations()
console.log(m.add(13,29));
console.log(m.mult(1.75,24));
console.log(m.sub(7,m.div(36,6)));


///////////////////////////////////////////
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('bla')
usersModule.addUser('la')

usersModule.listUsers()

//Exercise 1
const StringFormatter= function() {

    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const skewerCase = str => str.split(' ').join('-');

    return {
        capitalizeFirst : capitalizeFirst,
        skewerCase : skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box

//Exercise 2
const Bank= function () {
    let _money = 500;

    const depositCash = function (cash) { _money+= cash; }

    const checkBalance = () => console.log( _money);

    return {
        deposit : depositCash,
        showBalance : checkBalance
    }

}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

//Exercise 3
const SongsManager = function () {
    const _songs= [];

    const addSong= function (name, url) {
        _songs[name]= url.slice(32);
        console.log(_songs[name]);

    }

    const getSong = name => console.log(`https://www.youtube.com/watch?v=${_songs[name]}`);

    return {
        addSong : addSong,
        getSong : getSong
    }


}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ