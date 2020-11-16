//import {token,  userId ,  userNameBD} from "js/Values.js";

/*
    Méthodes d'accès aux services Web API_Server/bookmarks
 */


const apiBaseURL= "https://apple-lean-pruner.glitch.me/api/bookmarks";
//const apiBaseURL= "http://localhost:5000/api/bookmarks";
const apiUserURL = "https://apple-lean-pruner.glitch.me/token";
//const apiUserURL= "http://localhost:5000/token";
const apiRegisterURL = "https://apple-lean-pruner.glitch.me/Accounts/register";
const apiProfilURL = "https://apple-lean-pruner.glitch.me/Accounts/change";

function webAPI_GET_ALL(queryString, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + queryString,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data => { successCallBack(data); console.log("webAPI_GET_ALL - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET_ALL - error");
        }
    });
}

function webAPI_GET( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data  => { successCallBack(data); console.log("webAPI_GET - success", data);},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET - error");
        }
    });
}

function webAPI_LOGIN(data, successCallBack, errorCallBack){
    $.ajax({
        url: apiUserURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (data) => {successCallBack(data);  console.log("webAPI_LOGIN - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_LOGIN - error");
        }
    });
}


function webAPI_REGISTER(data, successCallBack, errorCallBack){
    $.ajax({
        url: apiRegisterURL,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (data) => {successCallBack("",data.Email);  console.log("webAPI_REGISTER - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_REGISTER - error");
        }
    });
}


function webAPI_PROFIL(data, successCallBack, errorCallBack){
    $.ajax({
        headers: {'authorization':data.token},
        url: apiProfilURL,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(data.data),
        success: (data) => {successCallBack(data);  console.log("webAPI_PROFIL - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_PROFIL - error");
        }
    });
}

function webAPI_POST( data, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        headers: {'authorization': data.token},
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data.bookmark),
        success: (data) => {successCallBack();  console.log("webAPI_POST - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_POST - error");
        }
    });
}

function webAPI_PUT(data, successCallBack, errorCallBack) {
    console.log(data);
    $.ajax({
        headers: {'authorization':data.token},
        url: apiBaseURL + "/" + data.bookmark.Id,
        type: 'PUT',
        contentType:'application/json',
        data: JSON.stringify(data.bookmark),
        success:(s) => {successCallBack();  console.log("webAPI_PUT - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_PUT - error");
        }
    });
}

function webAPI_DELETE( data, successCallBack, errorCallBack) {
    
    $.ajax({
        headers: {'authorization': data.token},
        url: apiBaseURL+"/" + data.Id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}

function webAPI_DELETE_PROFIL( data, successCallBack, errorCallBack) {
    
    $.ajax({
        headers: {'authorization': data.token},
        url: apiProfilURL+"/" + data.Id,
        contentType:'text/plain',
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE_PROFIL - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE_PROFIL - error");
        }
    });
}
