"use strict";

class UserStorage{
  static #users={//#표시는 public한 변수에서 private한 변수려 바꿔준다.
    id:["서영석","강성규","허정","방선주"],
    psword:["1234","1111","4444","2222"],
    name:["석","규","정","주"],
  };
  //id 손유정, pw:1234 추가함
  //id 이찬영, pw:3333 추가함

  static getUsers(...fields){
    const users = this.#users;
    const newUsers=fields.reduce((newUsers,field)=>{//reduce라는 메소드를 사용하면 fields에서 하나씩 빠져서 newUsers로 넣고 나머지가 field로 들어간다.
      //console.log(newUsers,field);
      if(users.hasOwnProperty(field)){
        newUsers[field]=users[field];
      }
      return newUsers;
    },{});
    return newUsers; 
  }

  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    },{});

    return userInfo;
  }

  static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push("");
    return {success: true};
  }
}

module.exports=UserStorage;