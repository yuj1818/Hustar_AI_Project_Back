"use strict";

const { response } = require("../../app");
const UserStorage = require("./UserStorage");
const masterID = 'master';
const masterPW = 'masterpw1234';

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body;
        const {id, psword} = UserStorage.getUserInfo(client.id);

        if (client.id === masterID && client.psword === masterPW){
            return {success: true};
        }else if(id){
            if (id === client.id && psword === client.psword){
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다"};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다"};
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;