const axios = require("axios");

class Spreadsheet {
    constructor(url, titles = []){
        this.output = url.match('output=(.+)')[1]
        this.url = url
        this.data = axios({method: "GET", url: url})
        this.titles = titles;
    }

    _zip (keys, values){
        var result = {};
        keys.forEach((key, i) => result[key] = values[i]);
        return result;
    };

    json(){
        let return_json = [];
        this.data.then(response=>{
            let text = response.data.replace("\n+","\n")
            let rows = response.data.split("\n")
            rows.forEach(row => {
                if  (this.titles) {
                    let oneRow = this._zip(this.titles,row.split(","));
                    return_json.push(oneRow);
                } else {
                    return_json.push(row.split(","))
                }
            });
        })
        return return_json;
    }

    text(){
        var return_text = "";
        this.data.then((response)=>{
            return_text += response.data
            // console.log(response.data)
        })
        return return_text;
    }

    setTitles(titles){
        this.titles = titles
    }
}

window.Spreadsheet = Spreadsheet
module.exports.Spreadsheet = Spreadsheet;