'use strict';

exports.ok = function (values, res) {
    var data = {
        'status' : 200,
        'values' : values 
    };

    res.json(data);
    res.end();
}

exports.notFound = function (values, res) {
    var data = {
        'status' : 404,
        'values' : values 
    };

    res.json(data);
    res.end();
}

exports.okUserWithBooks = function (values, res) {
    const result = values.reduce((resultJson, item)=>{
        if(resultJson[item.user_name]){
            const group = resultJson[item.user_name];
            if(Array.isArray(group.book_name)){
                group.book_name.push(item.book_name);
            }else {
                group.book_name = [group.book_name, item.book_name];
            }
        } else {
            resultJson[item.user_name] = item;
        }

        return resultJson;
    }, {})

    var data = {
        'status' : 200,
        'values' : result 
    };

    res.json(data);
    res.end();
}