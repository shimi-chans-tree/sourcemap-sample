const sourceMap = require('source-map');
const fs = require('fs');

// クラッシュログを入れる
const addressArray = [
    [2,1000],
    [2,1267]
]


// ソースマップファイルを読み込む
const sourcemap = JSON.parse(fs.readFileSync(`index.bundle.map`, 'utf8'));

new sourceMap.SourceMapConsumer(sourcemap).then((map)=>{
   
    console.log("---------------")
    addressArray.forEach((address)=>{
        console.log("line:",address[0], " column:" , address[1])

        const line = address[0]
        const column = address[1]
        console.log(map.originalPositionFor({
            line,
            column
          }));
    })
    console.log("---------------")
})


