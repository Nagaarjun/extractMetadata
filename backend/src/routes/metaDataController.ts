const Meta = require('html-metadata-parser');

const getMetaData = async (req: any, res: any) => {
    let url = req.body;
    Meta.parser(url, function (err:any, result:any) {
        if(err){
            res.status(500).send("Some Error occured");
        }
        res.send(result);
    })
  };

  export {getMetaData};