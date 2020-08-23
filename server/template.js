const template=(data1,data2)=>`
<!DOCTYPE>
<html>
    <head>
        <h1>${data1}</h1>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./bootstrap.min.css">
    </head>
    <body>
    <div class="col-xs-4 p-2">
    <div class="card text-align-center">
        <div class="form-group">
            <div class="text-align-center">
                <h5>${data2}</h5>
            </div>
        </div>
    </div>
    </div>
    </body>
</html>
`;
module.exports={
    template
};